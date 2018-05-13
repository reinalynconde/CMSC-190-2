#include <cereal/archives/json.hpp>
#include <cereal/cereal.hpp>
#include <cereal/types/polymorphic.hpp>
#include <cereal/details/helpers.hpp>

#include "StructureFromMotion.hpp"
#include "streaming-worker.h"
#include "sio_client.h"
#include "sio_message.h"

#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include "opencv2/core/eigen.hpp"
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include "opencv2/calib3d/calib3d.hpp"
#include "opencv2/xfeatures2d.hpp"
#include "opencv2/flann/miniflann.hpp"

#include "openMVG/cameras/cameras.hpp"
#include "openMVG/cameras/Camera_Pinhole.hpp"
#include "openMVG/cameras/Camera_undistort_image.hpp"
#include "openMVG/cameras/Camera_Common.hpp"
#include "openMVG/cameras/Cameras_Common_command_line_helper.hpp"
#include "openMVG/features/feature.hpp"
#include "openMVG/features/akaze/image_describer_akaze.hpp"
#include "openMVG/features/descriptor.hpp"
#include "openMVG/features/sift/SIFT_Anatomy_Image_Describer.hpp"
#include "openMVG/features/sift/SIFT_Anatomy_Image_Describer_io.hpp"
#include "openMVG/image/image_io.hpp"
#include "openMVG/image/image_concat.hpp"
#include "openMVG/features/regions_factory_io.hpp"
#include "openMVG/features/svg_features.hpp"
#include "openMVG/exif/exif_IO_EasyExif.hpp"
#include "openMVG/geodesy/geodesy.hpp"
#include "openMVG/geometry/pose3.hpp"
#include "openMVG/multiview/solver_fundamental_kernel.hpp"
#include "openMVG/multiview/solver_homography_kernel.hpp"
#include "openMVG/multiview/triangulation.hpp"
#include "openMVG/multiview/essential.hpp"
#include "openMVG/numeric/eigen_alias_definition.hpp"
#include "openMVG/matching/regions_matcher.hpp"
#include "openMVG/matching/svg_matches.hpp"
#include "openMVG/matching/indMatch.hpp"
#include "openMVG/matching/indMatch_utils.hpp"
#include "openMVG/matching_image_collection/Matcher_Regions.hpp"
#include "openMVG/matching_image_collection/Cascade_Hashing_Matcher_Regions.hpp"
#include "openMVG/matching_image_collection/GeometricFilter.hpp"
#include "openMVG/sfm/pipelines/sfm_features_provider.hpp"
#include "openMVG/sfm/pipelines/sfm_matches_provider.hpp"
#include "openMVG/sfm/pipelines/sfm_regions_provider.hpp"
#include "openMVG/sfm/pipelines/sfm_regions_provider_cache.hpp"
#include "openMVG/matching_image_collection/Geometric_Filter_utils.hpp"
#include "openMVG/matching_image_collection/F_ACRobust.hpp"
#include "openMVG/matching_image_collection/E_ACRobust.hpp"
#include "openMVG/matching_image_collection/H_ACRobust.hpp"
#include "openMVG/matching_image_collection/Pair_Builder.hpp"
#include "openMVG/matching/pairwiseAdjacencyDisplay.hpp"
#include "openMVG/sfm/pipelines/sequential/sequential_SfM.hpp"
#include "openMVG/sfm/pipelines/sfm_robust_model_estimation.hpp"
#include "openMVG/sfm/sfm.hpp"
#include "openMVG/sfm/sfm_data.hpp"
#include "openMVG/sfm/sfm_data_BA.hpp"
#include "openMVG/sfm/sfm_data_BA_ceres.hpp"
#include "openMVG/sfm/sfm_data_io.hpp"
#include "openMVG/sfm/sfm_data_utils.hpp"
#include "openMVG/sfm/sfm_view.hpp"
#include "openMVG/sfm/sfm_view_priors.hpp"
#include "openMVG/stl/stl.hpp"
#include "openMVG/robust_estimation/robust_estimator_ACRansac.hpp"
#include "openMVG/robust_estimation/robust_estimator_ACRansacKernelAdaptator.hpp"
#include "openMVG/types.hpp"

#define _USE_EIGEN
#include "InterfaceMVS.h"

#include "third_party/stlplus3/filesystemSimplified/file_system.hpp"

#include "nonFree/sift/SIFT_describer_io.hpp"

#include <ceres/ceres.h>
#include <ceres/rotation.h>

#include <functional>
#include <cstdlib>
#include <fstream>
#include <iostream>
#include <map>
#include <mutex>
#include <condition_variable>
#include <set>
#include <memory>
#include <stdio.h>
#include <string>
#include <thread>
#include <utility>
#include <node.h>
#include <nan.h>
#include <sqlite3.h>
#include <uv.h>
#include <unistd.h>
#include <omp.h>

// #include <iostream>
#include <chrono>
// #include <random>
// #include <thread>
#include "json.hpp"  //https://github.com/nlohmann/json

using namespace cv;
using namespace cv::xfeatures2d;
using namespace openMVG;
using namespace openMVG::image;
using namespace openMVG::exif;
using namespace openMVG::features;
using namespace openMVG::matching;
using namespace openMVG::robust;
using namespace openMVG::cameras;
using namespace openMVG::geometry;
using namespace openMVG::robust;
using namespace openMVG::sfm;
using namespace openMVG::matching_image_collection;
using namespace std;
using namespace stlplus;
// using namespace v8;
using namespace sio;


using json = nlohmann::json;

SfmData::SfmData(Callback *data, Callback *complete, Callback *error_callback,
  v8::Local<v8::Object> & options) : StreamingWorker(data, complete,
  error_callback) {

  if (options->IsObject() ) {
    v8::Local<v8::Value> in_ = options->Get(New<v8::String>("inputDir")
      .ToLocalChecked());
    if ( in_->IsString() ) {
      v8::String::Utf8Value s(in_);
      input_dirr = *s;
    }

    v8::Local<v8::Value> out_ = options->Get(New<v8::String>("outputDir")
      .ToLocalChecked());
    if ( out_->IsString() ) {
      v8::String::Utf8Value s(out_);
      output_dir = *s;
    }

    v8::Local<v8::Value> user_ = options->Get(New<v8::String>("user")
      .ToLocalChecked());
    if ( user_->IsString() ) {
      v8::String::Utf8Value s(user_);
      uname = *s;
    }
  }

}

SfmData::~SfmData() {

}

static int callback_sql(void *data, int argc, char **argv, char **azColName){
  int i;
  fprintf(stderr, "%s: ", (const char*)data);
  
  for(i = 0; i<argc; i++) {
      printf("%s = %s\n", azColName[i], argv[i] ? argv[i] : "NULL");
  }
  printf("\n");
  return 0;
}

bool SfmData::exportToOpenMVS() {
  string out = string(output_dir) + "/undistorted";
    // Create undistorted images directory structure
  if (!folder_exists(out)) {
    cout << "Output directory for undistorted images does not exist. Will try to create now..."
      << endl;
    if (!folder_create(out)) {
      cerr << "\nCannot create output directory" << endl;
      return false;
    }
  }

  // Export data :
  MVS::Interface scene;
  size_t nPoses(0);
  const uint32_t nViews((uint32_t)sfm_data.GetViews().size());

  // OpenMVG can have not contiguous index, use a map to create the required OpenMVS contiguous ID index
  std::map<openMVG::IndexT, uint32_t> map_intrinsic, map_view;

  // define a platform with all the intrinsic group
  for (const auto& intrinsic: sfm_data.GetIntrinsics())
  {
    if (isPinhole(intrinsic.second->getType()))
    {
      const Pinhole_Intrinsic * cam = dynamic_cast<const Pinhole_Intrinsic*>(intrinsic.second.get());
      if (map_intrinsic.count(intrinsic.first) == 0)
        map_intrinsic.insert(std::make_pair(intrinsic.first, scene.platforms.size()));
      MVS::Interface::Platform platform;
      // add the camera
      MVS::Interface::Platform::Camera camera;
      camera.K = cam->K();
      // sub-pose
      camera.R = Mat3::Identity();
      camera.C = Vec3::Zero();
      platform.cameras.push_back(camera);
      scene.platforms.push_back(platform);
    }
  }

  // define images & poses
  scene.images.reserve(nViews);
  for (const auto& view : sfm_data.GetViews())
  {
    map_view[view.first] = scene.images.size();
    MVS::Interface::Image image;
    const std::string srcImage = stlplus::create_filespec(sfm_data.s_root_path, view.second->s_Img_path);
    image.name = stlplus::create_filespec(output_dir, view.second->s_Img_path);
    image.platformID = map_intrinsic.at(view.second->id_intrinsic);
    MVS::Interface::Platform& platform = scene.platforms[image.platformID];
    image.cameraID = 0;
    if (!stlplus::is_file(srcImage))
    {
      std::cout << "Cannot read the corresponding image: " << srcImage << std::endl;
      return EXIT_FAILURE;
    }
    if (sfm_data.IsPoseAndIntrinsicDefined(view.second.get()) && stlplus::is_file(srcImage))
    {
      MVS::Interface::Platform::Pose pose;
      image.poseID = platform.poses.size();
      const openMVG::geometry::Pose3 poseMVG(sfm_data.GetPoseOrDie(view.second.get()));
      pose.R = poseMVG.rotation();
      pose.C = poseMVG.center();
      // export undistorted images
      const openMVG::cameras::IntrinsicBase * cam = sfm_data.GetIntrinsics().at(view.second->id_intrinsic).get();
      if (cam->have_disto())
      {
        // undistort image and save it
        Image<openMVG::image::RGBColor> imageRGB, imageRGB_ud;
        ReadImage(srcImage.c_str(), &imageRGB);
        UndistortImage(imageRGB, cam, imageRGB_ud, BLACK);
        WriteImage(image.name.c_str(), imageRGB_ud);
      }
      else
      {
        // just copy image
        stlplus::file_copy(srcImage, image.name);
      }
      platform.poses.push_back(pose);
      ++nPoses;
    }
    else
    {
      // image have not valid pose, so set an undefined pose
      image.poseID = NO_ID;
      // just copy the image
      stlplus::file_copy(srcImage, image.name);
    }
    scene.images.emplace_back(image);
  }

  // define structure
  scene.vertices.reserve(sfm_data.GetLandmarks().size());
  for (const auto& vertex: sfm_data.GetLandmarks())
  {
    const Landmark & landmark = vertex.second;
    MVS::Interface::Vertex vert;
    MVS::Interface::Vertex::ViewArr& views = vert.views;
    for (const auto& observation: landmark.obs)
    {
      const auto it(map_view.find(observation.first));
      if (it != map_view.end()) {
        MVS::Interface::Vertex::View view;
        view.imageID = it->second;
        view.confidence = 0;
        views.push_back(view);
      }
    }
    if (views.size() < 2)
      continue;
    std::sort(
      views.begin(), views.end(),
      [] (const MVS::Interface::Vertex::View& view0, const MVS::Interface::Vertex::View& view1)
      {
        return view0.imageID < view1.imageID;
      }
    );
    vert.X = landmark.X.cast<float>();
    scene.vertices.push_back(vert);
  }

  // normalize camera intrinsics
  for (size_t p=0; p<scene.platforms.size(); ++p)
  {
    MVS::Interface::Platform& platform = scene.platforms[p];
    for (size_t c=0; c<platform.cameras.size(); ++c) {
      MVS::Interface::Platform::Camera& camera = platform.cameras[c];
      // find one image using this camera
      MVS::Interface::Image* pImage(nullptr);
      for (MVS::Interface::Image& image: scene.images)
      {
        if (image.platformID == p && image.cameraID == c && image.poseID != NO_ID)
        {
          pImage = &image;
          break;
        }
      }
      if (pImage == nullptr)
      {
        std::cerr << "error: no image using camera " << c << " of platform " << p << std::endl;
        continue;
      }
      // read image meta-data
      ImageHeader imageHeader;
      ReadImageHeader(pImage->name.c_str(), &imageHeader);
      const double fScale(1.0/std::max(imageHeader.width, imageHeader.height));
      camera.K(0, 0) *= fScale;
      camera.K(1, 1) *= fScale;
      camera.K(0, 2) *= fScale;
      camera.K(1, 2) *= fScale;
    }
  }

  // write OpenMVS data
  if (!MVS::ARCHIVE::SerializeSave(scene, uname + ".mvs"))
    return false;

  std::cout
    << "Scene saved to OpenMVS interface format:\n"
    << " #platforms: " << scene.platforms.size() << std::endl;
    for (int i = 0; i < scene.platforms.size(); ++i)
    {
      std::cout << "  platform ( " << i << " ) #cameras: " << scene.platforms[i].cameras.size() << std::endl;
    }
  std::cout
    << "  " << scene.images.size() << " images (" << nPoses << " calibrated)\n"
    << "  " << scene.vertices.size() << " Landmarks\n";
  return true;
}

void SfmData::Execute (const AsyncProgressWorker::ExecutionProgress& progress) {
  bool closed = false;

  while (!closed) {
    if(set_dir(progress, input_dirr, output_dir, uname)) {
      reconstruct(progress);
      // exportToOpenMVS();
      // create_mesh();
    }
    
    closed = true;
    send_progress(progress, "done", 100, 4);

    /*sqlite3 *db;
    char *zErrMsg = 0;
    int rc;
    // char *sql;
    const char* data = "Callback function called";

    rc = sqlite3_open("db/origami.db", &db);
    
    if( rc ) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return;
    } else {
        fprintf(stderr, "Opened database successfully\n");
    }

    
    string sql_query = "UPDATE progress set progress = 'done', percent = '100', step = '4' where user = '" + uname + "';";

    rc = sqlite3_exec(db, sql_query.c_str(), callback_sql, (void*)data, &zErrMsg);
    
    if( rc != SQLITE_OK ) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
        return;
    } else {
        fprintf(stdout, "Operation done successfully\n");
    }
    sqlite3_close(db);*/
  }

}

void SfmData::send_progress(const AsyncProgressWorker::ExecutionProgress& progress, string message, double percent, int step) {
  json sample;
  sample["user"] = uname;
  sample["progress"] = message;
  sample["percent"] = percent;
  sample["step"] = step;
  Message tosend("progress", sample.dump());
  writeToNode(progress, tosend);
}

bool SfmData::set_dir(const AsyncProgressWorker::ExecutionProgress& prog, const string input_dir, const string output_d,
  string user) {
  //check validity of directory
  if (!folder_exists(input_dir)) {
    cerr << "\nThe input directory does not exist" << endl;
    return false;
  }

  if (output_d.empty()) {
    cerr << "\nInvalid output directory" << endl;
    return false;
  }

  if (!folder_exists(output_d)) {
    cout << "Output directory does not exist. Will try to create now..."
      << endl;
    if (!folder_create(output_d)) {
      cerr << "\nCannot create output directory" << endl;
      return false;
    }
  }

  input_dirr = input_dir;
  output_dir = output_d;
  uname = user;

  sfm_data.s_root_path = input_dirr;
  Views & views = sfm_data.views;
  Intrinsics & intrinsics_mvg = sfm_data.intrinsics;

  vector<string> imags = folder_files(input_dir);
  sort(imags.begin(), imags.end());

  string progress = "";
  double percent = 0;
  size_t i_size = imags.size();
  double c = 0;

  for(vector<string>::const_iterator i = imags.begin();
    i != imags.end(); i++) {
    
    const string full = create_filespec(input_dir, *i);
    const string fname = filename_part(full);

    Image_data image;

    if(GetFormat(full.c_str()) == Unknown) {
      cerr << fname << ": Unknown image file format." << endl;

      continue;
    }

    ImageHeader header;

    if(!ReadImageHeader(full.c_str(), &header))
      continue;

    unique_ptr<Exif_IO> exifReader(new Exif_IO_EasyExif);
    exifReader->open(full);

    const bool hasValidExifMetadata = exifReader->doesHaveExifInfo()
      && !exifReader->getModel().empty();

    //add data to img_data
    image.width = header.width;
    image.height = header.height;
    image.ppx = image.height / 2.0;
    image.ppy = image.width / 2.0;
    
    float f_35mm = exifReader->getFocalLengthIn35mm();

    if(f_35mm > 0)
      image.focal = f_35mm / 36.0;  //35mm film produces 36x24mm pictures
    else
      image.focal = max(image.width, image.height) * 1.2; //acdg to openmvg

    image.fname = fname;

    cv::Mat im = imread(full, CV_LOAD_IMAGE_COLOR);

    if(im.empty()) {
      cerr << "Image is empty." << endl;
      return false;
    }

    //preprocessing
    cv::Mat output;
    vector<cv::Mat> channels;
    cv::Mat conv;

    cvtColor(im, conv, COLOR_BGR2Lab);
    split(conv, channels);

    cout << "Applying CLAHE..." << endl;
    Ptr<CLAHE> clahe = createCLAHE(2.0, Size(8,8));
    clahe->apply(channels[0], channels[0]);

    merge(channels, conv);
    cvtColor(conv, conv, COLOR_Lab2BGR);

    cout << "Applying bilateral filter..." << endl;
    bilateralFilter(conv, output, 5, 50.0, 50.0, BORDER_DEFAULT);

    image.actual_image = output;

    images.push_back(image);

    //intrinsics for openmvg
    shared_ptr<IntrinsicBase> intrinsic = make_shared<Pinhole_Intrinsic_Radial_K3>(image.width, image.height, image.focal, image.ppx, image.ppy, 0.0, 0.0, 0.0);

    //view
    View v(*i, views.size(), views.size(), views.size(), image.width, image.height);

    if(intrinsic == nullptr)
      v.id_intrinsic = UndefinedIndexT;
    else
      intrinsics_mvg[v.id_intrinsic] = intrinsic;

    views[v.id_view] = make_shared<View>(v);

    ++c;

    progress = to_string((int)c) + string(" out of ") + to_string((int)i_size) + string(" images.");
    percent = c / (double)i_size * 100;
    
    send_progress(prog, progress, percent, 1);

    /*sqlite3 *db;
    char *zErrMsg = 0;
    int rc;
    // char *sql;
    const char* data = "Callback function called";

    // Open database 
    rc = sqlite3_open("db/origami.db", &db);
    
    if( rc ) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return false;
    } else {
        fprintf(stderr, "Opened database successfully\n");
    }

    // Create merged SQL statement 
    cout << progress << endl;
    string sql_query = "UPDATE progress set progress = '" +
      progress + "', percent = '" + percent + "', step = '1' where user = '" + uname + "';";

    // Execute SQL statement 
    rc = sqlite3_exec(db, sql_query.c_str(), callback_sql, (void*)data, &zErrMsg);
    
    if( rc != SQLITE_OK ) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
        return false;
    } else {
        fprintf(stdout, "Operation done successfully\n");
    }
    sqlite3_close(db);*/
    std::this_thread::sleep_for(chrono::milliseconds(50));
  }

  // Store SfM_Data views & intrinsic data
  if (!Save(sfm_data,
    stlplus::create_filespec(output_dir, "sfm_data.json").c_str(),
    ESfM_Data(VIEWS|INTRINSICS))) {
    return false;
  }

  return true;
} //set_dir end

bool SfmData::reconstruct(const AsyncProgressWorker::ExecutionProgress& prog) {
  if (images.size() <= 0) {
      cerr << "Directory is empty" << endl;
      return false;
  }

  bool ok = false;

  //init intrinsic data
  Image_data img = images[0]; //basis
  
  /*
  K =
  fx  0   ppx
  0   fy  ppy
  0   0   1
  */
  intrinsics.K = (Mat_<float>(3,3)
    << img.focal, 0, img.ppx,
        0, img.focal, img.ppy,
        0, 0, 1);
  intrinsics.K_inv = intrinsics.K.inv();
  intrinsics.distortion = Mat_<float>::zeros(1, 4);
  
  size_t i_size = images.size();
  poses.resize(i_size);
  matches.resize(i_size, vector<Matching>(i_size));
  describer.resize(i_size);

  detect_features(prog);
  //immediately end if there are no matches
  if(!feature_match(prog)) return false;
  //immediately end if there is no model
  //if(!inc_sfm()) return false;
  
  // select_initial_pair();
  // add_camera(prog);

  cout << "DONE!" << endl;

  string prefix = output_dir + "/model";
  cout << "Saving result reconstruction with prefix " << prefix << endl;

  ofstream ofs(prefix + "_sparse.ply");

  //write PLY header
  ofs << "ply                 " << endl <<
         "format ascii 1.0    " << endl <<
         "element vertex " << cloud.size() << endl <<
         "property float x    " << endl <<
         "property float y    " << endl <<
         "property float z    " << endl <<
         "property uchar red  " << endl <<
         "property uchar green" << endl <<
         "property uchar blue " << endl <<
         "end_header          " << endl;

  for (const Point3D& p : cloud) {
    //get color from first originating view
    auto start = p.images.begin();
    const int curr_view = start->first;
    Point2f p2d = describer[curr_view].points[start->second];
    Vec3b pointColor = images[curr_view].actual_image.at<Vec3b>(p2d);

  //write vertex
    ofs <<p.p.x              << " " <<
          p.p.y              << " " <<
          p.p.z              << " " <<
          (int)pointColor(2) << " " <<
          (int)pointColor(1) << " " <<
          (int)pointColor(0) << " " << endl;
  }

  ofs.close();

  ofstream ofsc(prefix + "_cameras.ply");
//AAAAAAAAAAAAAAAAOBJFILE
  //write PLY header
  ofsc << "ply                 " << endl <<
         "format ascii 1.0    " << endl <<
         "element vertex " << (poses.size() * 4) << endl <<
         "property float x    " << endl <<
         "property float y    " << endl <<
         "property float z    " << endl <<
         "element edge " << (poses.size() * 3) << endl <<
         "property int vertex1" << endl <<
         "property int vertex2" << endl <<
         "property uchar red  " << endl <<
         "property uchar green" << endl <<
         "property uchar blue " << endl <<
         "end_header          " << endl;

  //save cameras polygons..
  for (const auto& pose : poses) {
      Point3d c(pose(0, 3), pose(1, 3), pose(2, 3));
      Point3d cx = c + Point3d(pose(0, 0), pose(1, 0), pose(2, 0)) * 0.2;
      Point3d cy = c + Point3d(pose(0, 1), pose(1, 1), pose(2, 1)) * 0.2;
      Point3d cz = c + Point3d(pose(0, 2), pose(1, 2), pose(2, 2)) * 0.2;

      ofsc << c.x  << " " << c.y  << " " << c.z  << endl;
      ofsc << cx.x << " " << cx.y << " " << cx.z << endl;
      ofsc << cy.x << " " << cy.y << " " << cy.z << endl;
      ofsc << cz.x << " " << cz.y << " " << cz.z << endl;
  }

  const int camVertexStartIndex = cloud.size();

  for (size_t i = 0; i < poses.size(); i++) {
      ofsc << (i * 4 + 0) << " " <<
              (i * 4 + 1) << " " <<
              "255 0 0" << endl;
      ofsc << (i * 4 + 0) << " " <<
              (i * 4 + 2) << " " <<
              "0 255 0" << endl;
      ofsc << (i * 4 + 0) << " " <<
              (i * 4 + 3) << " " <<
              "0 0 255" << endl;
  }

  return true;
} //reconstruct end

void SfmData::detect_features(const AsyncProgressWorker::ExecutionProgress& prog) {
  size_t i_size = images.size();
  
  string progress;
  double percent = 0;

  //use openmvg's image describer
  const std::string fimage_describer = stlplus::create_filespec(output_dir, "image_describer", "json");
  unique_ptr<Image_describer> image_describer;
  image_describer.reset(new SIFT_Image_describer
        (SIFT_Image_describer::Params(), true));

  std::ofstream stream(fimage_describer.c_str());
  if (!stream.is_open())
    return;

  cereal::JSONOutputArchive archive(stream);
  archive(cereal::make_nvp("image_describer", image_describer));
  auto regions = image_describer->Allocate();
  archive(cereal::make_nvp("regions_type", regions));

  Image<uint8_t> imageGray;
  omp_set_num_threads(omp_get_max_threads());

  for(size_t i = 0; i < i_size; i++) {
    cout << "Detecting features of: " << images[i].fname << endl;
    Views::const_iterator iter = sfm_data.views.begin();
    cout << "0" << endl;
    std::advance(iter, i);
    cout << "a" << endl;
    const View *view = iter->second.get();
    
    cout << "b" << endl;
    string filename = create_filespec(sfm_data.s_root_path, view->s_Img_path);
    cout << "c" << endl;
    string ffeat = create_filespec(output_dir, basename_part(filename), "feat");
    cout << "d" << endl;
    string fdesc = create_filespec(output_dir, basename_part(filename), "desc");

    cout << "e" << endl;

    cout << filename << endl;
    cv::Mat im = imread(filename, CV_LOAD_IMAGE_GRAYSCALE);
    if(im.empty())
      continue;

    imageGray.resize(im.cols, im.rows);
    cv::cv2eigen(im, *(Image<uint8_t>::Base*)&imageGray);

    Image<unsigned char> * mask = nullptr;
    cout << "f0" << endl;
    auto regions = image_describer->Describe(imageGray, mask);
    cout << "f1" << endl;
    image_describer->Save(regions.get(), ffeat, fdesc);
    cout << "f2" << endl;

    cout << "f" << endl;
    //sift detector
    KeyPoints v_keypoints;
    cv::Mat m_desc;
    Ptr<Feature2D> sift = SIFT::create();

    //compute
    sift->detectAndCompute(images[i].actual_image,
      noArray(), v_keypoints, m_desc);

    cout << "g" << endl;
    //add the detected features to describer
    Describer desc;
    desc.keypoints = v_keypoints;
    desc.descriptors = m_desc;

    for (const auto& kp : v_keypoints) {
      desc.points.push_back(kp.pt);
    }

    describer[i] = desc;

    cout << "Detection done!" << endl;
 
    progress = to_string((int)i) + string(" out of ") + to_string((int)i_size) + string(" images.");
    percent = (double)i / (double)i_size * 100;

    send_progress(prog, progress, percent, 2);

    /*sqlite3 *db;
    char *zErrMsg = 0;
    int rc;
    // char *sql;
    const char* data = "Callback function called";

    // Open database 
    rc = sqlite3_open("db/origami.db", &db);
    
    if( rc ) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return;
    } else {
        fprintf(stderr, "Opened database successfully\n");
    }

    / Create merged SQL statement
    cout << progress << endl;
    string sql_query = "UPDATE progress set progress = '" +
      progress + "', percent = '" + percent + "', step = '2' where user = '" + uname + "';";

    // Execute SQL statement 
    rc = sqlite3_exec(db, sql_query.c_str(), callback_sql, (void*)data, &zErrMsg);
    
    if( rc != SQLITE_OK ) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
        return;
    } else {
        fprintf(stdout, "Operation done successfully\n");
    }
    sqlite3_close(db);*/
    std::this_thread::sleep_for(chrono::milliseconds(50));

  } //end images for loop    

} //detect_features end

bool SfmData::feature_match(const AsyncProgressWorker::ExecutionProgress& prog) {
  cout << "Start featur match!" << endl;
  size_t i_size = images.size();
  size_t v_size = sfm_data.GetViews().size();
  bool ok = false;

  if(describer.size() == 0)
    return false;

  double total = (i_size - 1) * i_size;
  double c = 0;

  string progress;
  double percent = 0;

  string fimage_describer = create_filespec(output_dir, "image_describer", "json");
  std::unique_ptr<Regions> regions_type = Init_region_type_from_file(fimage_describer);
  cout << "h" << endl;
  if (!regions_type) {
    return false;
  }

  shared_ptr<Regions_Provider> regions_provider = make_shared<Regions_Provider>();
cout << "i" << endl;
  if (!regions_provider->load(sfm_data, output_dir, regions_type)) {
    std::cerr << std::endl << "Invalid regions." << std::endl;
    return false;
  }

  PairWiseMatches map_PutativesMatches;
  vector<string> vec_fileNames;
  vector<pair<size_t, size_t> > vec_imagesSize;
  {
    vec_fileNames.reserve(v_size);
    vec_imagesSize.reserve(v_size);
    for (Views::const_iterator iter = sfm_data.GetViews().begin();
      iter != sfm_data.GetViews().end();
      iter++)
    {
      cout << vec_fileNames.size() << endl;
     
      const View * v = iter->second.get();
      vec_fileNames.push_back(stlplus::create_filespec(sfm_data.s_root_path,
          v->s_Img_path));
      vec_imagesSize.push_back( std::make_pair( v->ui_width, v->ui_height) );
    }
  }

  cout << "out!" << endl;
  unique_ptr<Matcher> collectionMatcher;
  collectionMatcher.reset(new Matcher_Regions(0.8f, ANN_L2));

  // From matching mode compute the pair list that have to be matched:
  Pair_Set pairs = exhaustivePairs(v_size);
  // Photometric matching of putative pairs
  C_Progress_display progresss;
  collectionMatcher->Match(regions_provider, pairs, map_PutativesMatches, &progresss);
  cout << "out1" << endl;
  //geometric filter
  unique_ptr<ImageCollectionGeometricFilter> filter_ptr(
    new ImageCollectionGeometricFilter(&sfm_data, regions_provider));
  
  if (!Save(map_PutativesMatches, std::string(output_dir + "/matches.putative.bin"))) return false;
  cout << "out2" << endl;
  if(!filter_ptr) return false;

  if(map_PutativesMatches.size() == 0){
    cout << "empty!" << endl;
    return false;
  }

  PairWiseMatches geom_matches;
  filter_ptr->Robust_model_estimation(GeometricFilter_FMatrix_AC(4.0, 2048), map_PutativesMatches, false, 0.6, &progresss);
  
  geom_matches = filter_ptr->Get_geometric_matches();


  if (!Save(geom_matches, string(output_dir + "/matches.f.bin")))
    return false;


  for(size_t i = 0; i < (i_size - 1); i++) {
    for(size_t j = (i + 1); j < i_size; j++) {
      cout << "Matching " << i << " and " << j << endl;
      ++c;

      Describer desc1 = describer[i]; //describer of left img
      Describer desc2 = describer[j]; //describer of right img

      Matching initial_matches;
      //opencv's flann matcher
      FlannBasedMatcher matcher;
      matcher.match(desc1.descriptors,
        desc2.descriptors, initial_matches);

      //only get good matches by ratio test: max(3*min_dist, 0.06)
      double max_dist = 0, min_dist = 100;
      int desc1_d_rows = desc1.descriptors.rows;

      for(int k = 0; k < desc1_d_rows; k++) {
        double dist = initial_matches[k].distance;
        if(dist < min_dist) min_dist = dist;
        if(dist > max_dist) max_dist = dist;
      }

      cout << "min: " << min_dist << "\nmax: " << max_dist
        <<"\ninitial_matches: " << initial_matches.size() << endl;

      Matching good_matches;
      for(int k = 0; k < desc1_d_rows; k++ ) {
        if(initial_matches[k].distance < max(3*min_dist, 0.06))
          good_matches.push_back(initial_matches[k]);
      }

      cout << "good_matches: " << good_matches.size() << endl;

      matches[i][j] = good_matches;

      //means that at least a pair has matches
      if(ok == false && matches[i][j].size() > 0)
        ok = true;

      progress = to_string((int)i) + string(" and ") + to_string((int)j);
      percent = c / total * 200;
      
      send_progress(prog, progress, percent, 3);

      /*sqlite3 *db;
      char *zErrMsg = 0;
      int rc;
      // char *sql;
      const char* data = "Callback function called";

      // Open database 
      rc = sqlite3_open("db/origami.db", &db);
      
      if( rc ) {
          fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
          return false;
      } else {
          fprintf(stderr, "Opened database successfully\n");
      }

      // Create merged SQL statement
      cout << progress << endl;
      string sql_query = "UPDATE progress set progress = '" +
        progress + "', percent = '" + percent + "', step = '3' where user = '" + uname + "';";

      // Execute SQL statement
      rc = sqlite3_exec(db, sql_query.c_str(), callback_sql, (void*)data, &zErrMsg);
      
      if( rc != SQLITE_OK ) {
          fprintf(stderr, "SQL error: %s\n", zErrMsg);
          sqlite3_free(zErrMsg);
          return false;
      } else {
          fprintf(stdout, "Operation done successfully\n");
      }
      sqlite3_close(db);*/
      std::this_thread::sleep_for(chrono::milliseconds(50));
      if(percent >= 90) cout << "last?" << endl;
    } //end of inner images for loop
  } //end of outer images for loop

  return ok;
} //feature_match end

bool computeIndexFromImageNames(
  const SfM_Data & sfm_data,
  const std::pair<std::string,std::string>& initialPairName,
  Pair& initialPairIndex)
{
  if (initialPairName.first == initialPairName.second)
  {
    std::cerr << "\nInvalid image names. You cannot use the same image to initialize a pair." << std::endl;
    return false;
  }

  initialPairIndex = Pair(UndefinedIndexT, UndefinedIndexT);

  /// List views filenames and find the one that correspond to the user ones:
  for (Views::const_iterator it = sfm_data.GetViews().begin();
    it != sfm_data.GetViews().end(); ++it)
  {
    const View * v = it->second.get();
    const std::string filename = stlplus::filename_part(v->s_Img_path);
    if (filename == initialPairName.first)
    {
      initialPairIndex.first = v->id_view;
    }
    else{
      if (filename == initialPairName.second)
      {
        initialPairIndex.second = v->id_view;
      }
    }
  }
  return (initialPairIndex.first != UndefinedIndexT &&
      initialPairIndex.second != UndefinedIndexT);
}

bool SfmData::inc_sfm() {
  cout << "start incr" << endl;
  const string fimage_describer = create_filespec(output_dir, "image_describer", "json");
  unique_ptr<Regions> regions_type = Init_region_type_from_file(fimage_describer);
  if(!regions_type) return false;

  const cameras::Intrinsic_Parameter_Type refinement_opts =
    cameras::StringTo_Intrinsic_Parameter_Type("ADJUST_ALL");

  // Features reading
  shared_ptr<Features_Provider> feats_provider = make_shared<Features_Provider>();
  if(!feats_provider->load(sfm_data, output_dir, regions_type)) 
    return false;

  // Matches reading
  shared_ptr<Matches_Provider> matches_provider = make_shared<Matches_Provider>();
  if(!(matches_provider->load(sfm_data, stlplus::create_filespec(output_dir, "matches.f.bin"))) )
    return false;
  cout <<"ennnn" << endl;
  SequentialSfMReconstructionEngine sfmEngine(sfm_data, output_dir);

   // Configure the features_provider & the matches_provider
  sfmEngine.SetFeaturesProvider(feats_provider.get());
  sfmEngine.SetMatchesProvider(matches_provider.get());

  // Configure reconstruction parameters
  sfmEngine.Set_Intrinsics_Refinement_Type(refinement_opts);
  sfmEngine.SetUnknownCameraType(EINTRINSIC(PINHOLE_CAMERA_RADIAL3));
  sfmEngine.Set_Use_Motion_Prior(false);

  pair<string, string> init_pair = select_initial_pair();
  Pair init_pair_ind;
  cout << "before compute" << endl;
  if(!computeIndexFromImageNames(sfm_data, init_pair, init_pair_ind))
    return false;
  sfmEngine.setInitialPair(init_pair_ind);
  cout << "after set" << endl;
  if(sfmEngine.Process()) {
    //-- Export to disk computed scene (data & visualizable results)
    cout << "...Export SfM_Data to disk." << endl;
    Save(sfmEngine.Get_SfM_Data(),
      stlplus::create_filespec(output_dir, "sfm_data", ".bin"),
      ESfM_Data(ALL));

    Save(sfmEngine.Get_SfM_Data(),
      create_filespec(output_dir, "cloud_and_poses", ".ply"),
      ESfM_Data(ALL));

    return true;
  }

  return false;
}


map<float, APair> SfmData::rank_matches() {
  //matches  will be ranked by homography inliers:matches ratio
  //pair with least ratio and atleast 100 matches is selected

  size_t i_size = images.size();
  map<float, APair> h_inliers;

  for(size_t i = 0; i < (i_size - 1); i++) {
    for(size_t j = (i + 1); j < i_size; j++) {

      Matching maatch = matches[i][j];
      size_t m_size = maatch.size();
      
      //any matches less than 100 are eliminated
      if (m_size < 100) {
        h_inliers[1.0] = {i, j};
        continue;
      }
      
      Points2f im1;
      Points2f im2;

      for(size_t k = 0; k < m_size; k++) {
        im1.push_back(describer[i].keypoints[maatch[k].queryIdx].pt);
        im2.push_back(describer[j].keypoints[maatch[k].trainIdx].pt);
      }

      cv::Mat mask;
      //find homography based on the matching points of the images
      cv::Mat H = findHomography(im1, im2, RANSAC, 10, mask, 1024);

      if(H.empty()) {
        cout << "Homography not found :(" << endl;
      } else {
        cout << "Homography found :)" << endl;

        /* 
        Trivia: after findHomography(), the mask contains the status
          of points (outlier/inlier). Outliers are expressed as zeros.
          So, to count the inliers in mask, use countNonZero(mask).
         */

        int len_inliers = countNonZero(mask);
        
        float ratio;
        if(len_inliers < 100) //again, a pair is eliminated if inliers is
          ratio = 1.0;            //less than 100
        else
          ratio = (float)len_inliers / (float)m_size;
        
        //pair added in h_inliers
        h_inliers[ratio] = {i, j};
      }

    } // inner for loop end
  } // outer for loop end

  return h_inliers;
} //rank_matches end

void SfmData::adj_bundle() {
  //ceres solver is used for bundle adjustment
  //https://github.com/ceres-solver/ceres-solver/blob/master/examples/simple_bundle_adjuster.cc
  // Create residuals for each observation in the bundle adjustment problem.
  // The parameters for cameras and points are added automatically.
  ceres::Problem problem;

  //angle-axis, translation from [R|t]
  vector<Matx<double, 1, 6>> aaxis_trans;
  size_t p_size = poses.size();
  aaxis_trans.reserve(p_size);

  for (size_t i = 0; i < p_size; i++) {
    const Matx34f& pose = poses[i];
    
    //if empty
    if (pose(0, 0) == 0 && pose(1, 1) == 0 && pose(2, 2) == 0) {
      aaxis_trans.push_back(Matx<double, 1, 6>());
      continue;
    }

    cv::Vec3f t(pose(0, 3), pose(1, 3), pose(2, 3));
    Matx33f R = pose.get_minor<3, 3>(0, 0);
    float angle_axis[3];
    ceres::RotationMatrixToAngleAxis<float>(R.t().val, angle_axis);

    aaxis_trans.push_back(
      Matx<double, 1, 6>(angle_axis[0],
                        angle_axis[1],
                        angle_axis[2],
                        t(0),
                        t(1),
                        t(2)));
  }

  double focal = intrinsics.K.at<float>(0, 0);

  vector<cv::Vec3d> points3d(cloud.size());

  for (int i = 0; i < cloud.size(); i++) {
    const Point3D& p = cloud[i];
    points3d[i] = cv::Vec3d(p.p.x, p.p.y, p.p.z);

    for (const auto& kv : p.images) {
      //kv.first  = camera index
      //kv.second = 2d feature index
      Point2f p2d = describer[kv.first].points[kv.second];

      //subtract center of projection
      p2d.x -= intrinsics.K.at<float>(0, 2);
      p2d.y -= intrinsics.K.at<float>(1, 2);

      // Each Residual block takes a point and a camera as input and outputs a 2
      // dimensional residual. Internally, the cost function stores the observed
      // image location and compares the reprojection against the observation.
      ceres::CostFunction* cost_function = SnavelyReprojectionError::Create(p2d.x, p2d.y);

      problem.AddResidualBlock(cost_function,
              NULL /* squared loss */,
              aaxis_trans[kv.first].val,
              points3d[i].val,
              &focal);
    }
  }

  // Make Ceres automatically detect the bundle structure. Note that the
  // standard solver, SPARSE_NORMAL_CHOLESKY, also works fine but it is slower
  // for standard bundle adjustment problems.
  ceres::Solver::Options options;
  options.linear_solver_type = ceres::DENSE_SCHUR;
  options.minimizer_progress_to_stdout = true;
  options.max_num_iterations = 500;
  options.eta = 1e-2;
  options.max_solver_time_in_seconds = 10;
  options.logging_type = ceres::LoggingType::SILENT;
  ceres::Solver::Summary summary;
  ceres::Solve(options, &problem, &summary);
  std::cout << summary.BriefReport() << "\n";

  if (!(summary.termination_type == ceres::CONVERGENCE)) {
    cerr << "Ceres Bundle adjustment failed." << endl;
    return;
  }

  //put optimized data back

  intrinsics.K.at<float>(0, 0) = focal;
  intrinsics.K.at<float>(1, 1) = focal;

  for (size_t i = 0; i < p_size; i++) {
    Matx34f& pose = poses[i];
    Matx34f poseBefore = pose;

    if (pose(0, 0) == 0 and pose(1, 1) == 0 and pose(2, 2) == 0) {
      continue;
    }

    double rotationMat[9] = { 0 };
    ceres::AngleAxisToRotationMatrix(aaxis_trans[i].val, rotationMat);

    for (int r = 0; r < 3; r++) {
      for (int c = 0; c < 3; c++) {
        pose(c, r) = rotationMat[r * 3 + c];
      }
    }

    pose(0, 3) = aaxis_trans[i](3);
    pose(1, 3) = aaxis_trans[i](4);
    pose(2, 3) = aaxis_trans[i](5);
  }

  for (int i = 0; i < cloud.size(); i++) {
      cloud[i].p.x = points3d[i](0);
      cloud[i].p.y = points3d[i](1);
      cloud[i].p.z = points3d[i](2);
  }

} //adj_bundle end

pair<string, string> SfmData::select_initial_pair() {
  cout << "Select initial pair" << endl;

  //rank matches by homography inliers ratio
  map<float, APair> h_inliers = rank_matches();

  Matx34f pose_left  = Matx34f::eye();
  Matx34f pose_right = Matx34f::eye();
  PointCloud point_cloud;

  for (auto& image_pair : h_inliers) {
    size_t i = image_pair.second.first;
    size_t j = image_pair.second.second;

    Matching pruned;
    //get focal, ppx, ppy
    double focal = intrinsics.K.at<float>(0, 0);
    Point2d pp(intrinsics.K.at<float>(0, 2), intrinsics.K.at<float>(1, 2));

    Describer left_view;
    Describer right_view;
    vector<int> back_refL;
    vector<int> back_refR;

    Matching maatch = matches[i][j];
    for (unsigned int k = 0; k < maatch.size(); k++) {
      //add keypoints and descriptors to left view
      left_view.keypoints.push_back(describer[i].
        keypoints[maatch[k].queryIdx]);
      left_view.descriptors.push_back(describer[i].
        descriptors.row(maatch[k].queryIdx));
      
      //add keypoints and descriptors to right view
      right_view.keypoints.push_back(describer[j].
        keypoints[maatch[k].trainIdx]);
      right_view.descriptors.push_back(describer[j].
        descriptors.row(maatch[k].trainIdx));
      
      //add index ref to left and right
      back_refL.push_back(maatch[k].queryIdx);
      back_refR.push_back(maatch[k].trainIdx);
    }

    //keypoints to points
    Points2f p2s;
    for (const auto& kp : left_view.keypoints) {
      p2s.push_back(kp.pt);
    }

    left_view.points = p2s;

    Points2f p2s_2;
    for (const auto& kp : right_view.keypoints) {
      p2s_2.push_back(kp.pt);
    }

    right_view.points = p2s_2;

    //essential matrix
    cout << "Get essential matrix for pruning" << endl;
    cv::Mat R, t, mask;
    cv::Mat E = findEssentialMat(left_view.points, right_view.points,
      focal, pp, RANSAC, 0.999, 1.0, mask);

    recoverPose(E, left_view.points, right_view.points, R, t, focal, pp, mask);

    pose_left = Matx34f::eye();
    pose_right = Matx34f(
    R.at<double>(0,0), R.at<double>(0,1), R.at<double>(0,2), t.at<double>(0),
    R.at<double>(1,0), R.at<double>(1,1), R.at<double>(1,2), t.at<double>(1),
    R.at<double>(2,0), R.at<double>(2,1), R.at<double>(2,2), t.at<double>(2));

    //add turned on matches according to mask (inliers)
    pruned.clear();
    for (size_t k = 0; k < mask.rows; k++) {
      if (mask.at<uchar>(k)) {
        pruned.push_back(maatch[k]);
      }
    }

    matches[i][j] = pruned;

    //triangulate points start
    cout << "Triangulate points" << endl;
    cv::Mat norm_left;
    cv::Mat norm_right;
    //undistortPoints() used to normalize points
    undistortPoints(left_view.points,  norm_left, intrinsics.K, cv::Mat());
    undistortPoints(right_view.points, norm_right, intrinsics.K, cv::Mat());
    cout << "after undistort" << endl;
    cv::Mat points3dHomogeneous;
    //reconstruct points in homogeneous coordinates.
    triangulatePoints(pose_left, pose_right, norm_left, norm_right,
      points3dHomogeneous);
    cout << "after homo" << endl;
    cv::Mat points3d;
    //get points in points3dHomogeneous
    convertPointsFromHomogeneous(points3dHomogeneous.t(), points3d);
    
    cv::Mat rvec_left;
    //convert rotation matrix to rotation vector
    Rodrigues(pose_left.get_minor<3, 3>(0, 0), rvec_left);
    cv::Mat tvecLeft(pose_left.get_minor<3, 1>(0, 3).t());
    
    Points2f proj_on_left(left_view.points.size());
    //projects 3D points to an image plane
    projectPoints(points3d, rvec_left, tvecLeft, intrinsics.K, cv::Mat(),
      proj_on_left);
    
    cv::Mat rvec_right;
    Rodrigues(pose_right.get_minor<3, 3>(0, 0), rvec_right);
    cv::Mat tvecRight(pose_right.get_minor<3, 1>(0, 3).t());
    
    Points2f proj_on_right(right_view.points.size());
    projectPoints(points3d, rvec_right, tvecRight, intrinsics.K, cv::Mat(),
      proj_on_right);
      
    for (size_t k = 0; k < points3d.rows; k++) {
      //skip if reprojection error reaches the limit
      if (norm(proj_on_left[k] - left_view.points[k]) > 10.0 ||
          norm(proj_on_right[k] - right_view.points[k]) > 10.0) {
          continue;
      }
      
      Point3D p;
      p.p = Point3f(points3d.at<float>(k, 0),
                    points3d.at<float>(k, 1),
                    points3d.at<float>(k, 2));

      p.images[i] = back_refL[k];
      p.images[j] = back_refR[k];

      //add p to point cloud
      point_cloud.push_back(p);
    } //end of for loop on points3d.rows
    cout << "after loop" << endl;

    cloud = point_cloud;

    //add left and right poses
    poses[i] = pose_left;
    poses[j] = pose_right;

    //add these views to done and good vectors
    images[i].position = i;
    images[j].position = j;
    done_v.insert(i);
    done_v.insert(j);
    good_v.insert(i);
    good_v.insert(j);

    //adj_bundle();
    cout << "after adj" << endl;

    pair<string, string> initialPairString(images[i].fname, images[j].fname);
    cout << "si end" << endl;
    return initialPairString;
  } // end of for loop on h_inliers
  cout << "select init pair end"<< endl;
  pair<string, string> initialPairString(images[0].fname, images[1].fname);
  return initialPairString;
} //select_initial_pair end

Image2D3Ds SfmData::match_2D_3D() {
  Image2D3Ds m23;

  for (size_t curr_view = 0; curr_view < images.size(); curr_view++) {
    if (done_v.find(curr_view) != done_v.end()) {
      continue;
    }

    Image2D3D match_23;

    for (Point3D& cloud_p : cloud) {
      bool found_pt = false;

      for (auto& view : cloud_p.images) {
        int start_idx = view.first;
        int feature_idx = view.second;

        int curr_viewL = (start_idx < curr_view) ? start_idx : curr_view;
        int curr_viewR = (start_idx < curr_view) ? curr_view : start_idx;

        for(DMatch& m : matches[curr_viewL][curr_viewR]) {
            int matches_2d = -1;

            if (start_idx < curr_view && m.queryIdx == feature_idx)
              matches_2d = m.trainIdx; //left
            else if(start_idx >= curr_view && m.trainIdx == feature_idx)
              matches_2d = m.queryIdx; //right

            if (matches_2d >= 0) {
                const Describer& new_view = describer[curr_view];
                match_23.points2D.push_back(new_view.points[matches_2d]);
                match_23.points3D.push_back(cloud_p.p);
                found_pt = true;
                break;
            }
        } //end of for loop on matches

        if (found_pt) break;

      } //end of for loop on images per point cloud
    } //end of for loop on point cloud

    m23[curr_view] = match_23;
  } //end of for loop in not-done images

  return m23;
}

void SfmData::add_camera(const AsyncProgressWorker::ExecutionProgress& prog) {
  cout << "------------------ Add More Views ------------------" << endl;

  string progress;
  double percent = 0;

  while (done_v.size() != images.size()) {
    Image2D3Ds matches2D3D = match_2D_3D();    
    
    size_t bestView = -1;
    size_t bestNumMatches = 0;
    int hi = 0;
    for (const auto& match_23 : matches2D3D) {
      const size_t numMatches = match_23.second.points2D.size();
      cout << hi << " hi! " << numMatches << endl;
      hi++;
      if (numMatches > bestNumMatches) {
        bestView = match_23.first;
        bestNumMatches = numMatches;
        cout << "best view? " << bestView << endl;
      }
    }

    if (bestView == -1) {
      cout << "No best view :(" << endl;
      continue;
    }

    cout << "Best view " << bestView << " has " << bestNumMatches
      << " matches" << endl;
    cout << "Adding " << bestView << " to existing "
      << cv::Mat(vector<int>(good_v.begin(), good_v.end())).t() << endl;

    images[bestView].position = bestView;
    done_v.insert(bestView);
    cout << "hey " << done_v.size() << endl;
    //recover the new view camera pose
    Matx34f newCameraPose;
    cout << "Does shit happen here" << endl;
    //Recover camera pose using 2D-3D correspondence
    cv::Mat rvec, tvec;
    cv::Mat inliers;
    solvePnPRansac(matches2D3D[bestView].points3D,
      matches2D3D[bestView].points2D,intrinsics.K, intrinsics.distortion,
      rvec, tvec, false, 100, 10.0, 0.99, inliers);

    //check inliers ratio and reject if too small
    if (((float)countNonZero(inliers) /
      (float)matches2D3D[bestView].points2D.size()) < 10.0) {
      cerr << "Inliers ratio is too small: " << countNonZero(inliers)
        << " / " << matches2D3D[bestView].points2D.size() << endl;
      
      cerr << "Cannot recover camera pose for view " << bestView << endl;
      continue;
    }

    cv::Mat rotMat;
    Rodrigues(rvec, rotMat); //convert to a rotation matrix

    rotMat.copyTo(cv::Mat(3, 4, CV_32FC1,
      newCameraPose.val)(Rect(0, 0, 3, 3)));
    tvec.copyTo(cv::Mat(3, 4, CV_32FC1,
      newCameraPose.val)(Rect(3, 0, 1, 3)));

    poses[bestView] = newCameraPose;

    cout << "New view " << bestView << " pose " << endl << newCameraPose << endl;

    //triangulate more points from new view to all existing good views
    for (const int goodView : good_v) {
      //since match matrix is upper-triangular (non symmetric) - use lower index as left
      size_t curr_viewL  = (goodView < bestView) ? goodView : bestView;
      size_t curr_viewR = (goodView < bestView) ? bestView : goodView;

      Matching prunedMatches;
      Matx34f pose_left  = Matx34f::eye();
      Matx34f pose_right = Matx34f::eye();

      cout << "---- Find camera matrices" << endl;
      //recover camera matrices (poses) from the point matching
      double focal = intrinsics.K.at<float>(0, 0); //Note: assuming fx = fy
      Point2d pp(intrinsics.K.at<float>(0, 2), intrinsics.K.at<float>(1, 2));

      Describer left_view;
      Describer right_view;

      //get aligned points from match
      vector<int> back_refL;
      vector<int> back_refR;
      Matching maatch = matches[curr_viewL][curr_viewR];
      for (unsigned int k = 0; k < maatch.size(); k++) {
        left_view.keypoints.push_back(describer[curr_viewL]
          .keypoints[maatch[k].queryIdx]);
        left_view.descriptors.push_back(describer[curr_viewL]
          .descriptors.row(maatch[k].queryIdx));
        right_view.keypoints.push_back(describer[curr_viewR]
          .keypoints[maatch[k].trainIdx]);
        right_view.descriptors.push_back(describer[curr_viewR]
          .descriptors.row(maatch[k].trainIdx));
        back_refL.push_back(maatch[k].queryIdx);
        back_refR.push_back(maatch[k].trainIdx);
      }

      //keypoints to points
      Points2f p2s;
      for (const auto& kp : left_view.keypoints) {
        p2s.push_back(kp.pt);
      }

      left_view.points = p2s;

      Points2f p2s_2;
      for (const auto& kp : right_view.keypoints) {
        p2s_2.push_back(kp.pt);
      }

      right_view.points = p2s_2;

      //end of get aligned points from match

      //get essential matrix
      cout << "get essential matrix" << endl;
      cv::Mat R, t, mask;
      cv::Mat E = findEssentialMat(left_view.points, right_view.points,
        focal, pp, RANSAC, 0.999, 1.0, mask);

      cout << "ESSENTIAL MATRIX:\n" << E << endl;

      recoverPose(E, left_view.points, right_view.points, R, t, focal, pp, mask);

      pose_left = Matx34f::eye();
      pose_right = Matx34f(R.at<double>(0,0), R.at<double>(0,1),
                        R.at<double>(0,2), t.at<double>(0),
                        R.at<double>(1,0), R.at<double>(1,1),
                        R.at<double>(1,2), t.at<double>(1),
                        R.at<double>(2,0), R.at<double>(2,1),
                        R.at<double>(2,2), t.at<double>(2));

      for (size_t u = 0; u < mask.rows; u++) {
        if (mask.at<uchar>(u)) {
          prunedMatches.push_back(maatch[u]);
        }
      }

      matches[curr_viewL][curr_viewR] = prunedMatches;
      cout << "pruned matches = " << prunedMatches.size() << endl;

      //triangulate points start
      cout << "Triangulate points" << endl;
      cv::Mat norm_left;
      cv::Mat norm_right;
      undistortPoints(left_view.points,  norm_left,  
        intrinsics.K, cv::Mat());
      undistortPoints(right_view.points, norm_right, 
        intrinsics.K, cv::Mat());
      cout << "undistort done!" << endl;

      cv::Mat points3dHomogeneous;
      triangulatePoints(pose_left, pose_right, norm_left, norm_right,
        points3dHomogeneous);
      cout << "actual triangulation done" << endl;
      cv::Mat points3d;
      convertPointsFromHomogeneous(points3dHomogeneous.t(), points3d);
      cout << "conversion done" << endl;
      cv::Mat rvec_left;
      Rodrigues(pose_left.get_minor<3, 3>(0, 0), rvec_left);
      cv::Mat tvecLeft(pose_left.get_minor<3, 1>(0, 3).t());
      cout << "rodrigues1 done" << endl;
      Points2f proj_on_left(left_view.points.size());
      projectPoints(points3d, rvec_left, tvecLeft, intrinsics.K, cv::Mat(),
        proj_on_left);
      cout << "projection1 done" << endl;
      cv::Mat rvec_right;
      Rodrigues(pose_right.get_minor<3, 3>(0, 0), rvec_right);
      cv::Mat tvecRight(pose_right.get_minor<3, 1>(0, 3).t());
      cout << "rodrigues2 done" << endl;
      Points2f proj_on_right(right_view.points.size());
      projectPoints(points3d, rvec_right, tvecRight, intrinsics.K, cv::Mat(),
        proj_on_right);
      cout << "projection2 done: " << points3d.size() << endl;
      PointCloud point_cloud;
      for (size_t k = 0; k < points3d.rows; k++) {
        cout << "sup" << endl;
        //check if point reprojection error is small enough
        if (norm(proj_on_left[k] - left_view.points[k]) > 10.0 ||
            norm(proj_on_right[k] - right_view.points[k]) > 10.0) {
            continue;
        }

        cout << "not continued" << endl;

        Point3D p;
        p.p = Point3f(points3d.at<float>(k, 0),
                      points3d.at<float>(k, 1),
                      points3d.at<float>(k, 2));

        //use back reference to point to original features in images
        p.images[curr_viewL]  = back_refL[k];
        p.images[curr_viewR] = back_refR[k];


        point_cloud.push_back(p);
        cout << "pc.size: " << point_cloud.size() << endl;
      }
      cout << "for loop done" << endl;
      cloud = point_cloud;

      /* poses[curr_viewL] = pose_left;
      poses[curr_viewL] = pose_right;

      done_v.insert(i);
      done_v.insert(j);
      good_v.insert(i);
      good_v.insert(j); */

      adj_bundle();

      cout << "Merge triangulation between "
        << curr_viewL << " and " << curr_viewR <<
        " (# matching pts = "
        << (matches[curr_viewL][curr_viewR].size()) << ") ";
        //add new points to the reconstruction
      merge_cloud(point_cloud);

      adj_bundle();

      progress = to_string((int)done_v.size())
      + string(" out of ") + to_string((int)images.size()) + " images.";

      percent = (double)done_v.size() / (double)images.size() * 100;

      send_progress(prog, progress, percent, 4);

      /*sqlite3 *db;
      char *zErrMsg = 0;
      int rc;
      // char *sql;
      const char* data = "Callback function called";

      // Open database 
      rc = sqlite3_open("db/origami.db", &db);
      
      if( rc ) {
          fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
          return;
      } else {
          fprintf(stderr, "Opened database successfully\n");
      }

      // Create merged SQL statement 
      cout << progress << endl;
      string sql_query = "UPDATE progress set progress = '" +
        progress + "', percent = '" + percent + "', step = '4' where user = '" + uname + "';";

      // Execute SQL statement 
      rc = sqlite3_exec(db, sql_query.c_str(), callback_sql, (void*)data, &zErrMsg);
      
      if( rc != SQLITE_OK ) {
          fprintf(stderr, "SQL error: %s\n", zErrMsg);
          sqlite3_free(zErrMsg);
          return;
      } else {
          fprintf(stdout, "Operation done successfully\n");
      }
      sqlite3_close(db);*/
      std::this_thread::sleep_for(chrono::milliseconds(50));
    }

    good_v.insert(bestView);
  }

} //ad_camera end

void SfmData::merge_cloud(const PointCloud &pcloud) {
  const size_t numImages = images.size();
  Matches mergeMatchMatrix;
  mergeMatchMatrix.resize(numImages, vector<Matching>(numImages));

  size_t newPoints = 0;
  size_t mergedPoints = 0;

  for (const Point3D& p : cloud) {
    const Point3f newPoint = p.p; //new 3D point

    bool foundAnyMatchingExistingViews = false;
    bool foundMatching3DPoint = false;
    for (Point3D& existingPoint : cloud) {
      if (norm(existingPoint.p - newPoint) < 0.01) {
        //This point is very close to an existing 3D cloud point
        foundMatching3DPoint = true;

        //Look for common 2D features to confirm match
        for (const auto& newKv : p.images) {
          //kv.first = new point's originating view
          //kv.second = new point's view 2D feature index

          for (const auto& existingKv : existingPoint.images) {
            //existingKv.first = existing point's originating view
            //existingKv.second = existing point's view 2D feature index

            bool foundMatchingFeature = false;

            const bool newIsLeft = newKv.first < existingKv.first;
            const int curr_viewL = (newIsLeft) ? newKv.first
              : existingKv.first;
            const int leftViewFeatureIdx  = (newIsLeft) ? newKv.second
              : existingKv.second;
            const int curr_viewR = (newIsLeft) ? existingKv.first
              : newKv.first;
            const int rightViewFeatureIdx = (newIsLeft) ? existingKv.second
              : newKv.second;

            const Matching& matching = matches[curr_viewL][curr_viewR];
            for (const DMatch& match : matching) {
              if (    match.queryIdx == leftViewFeatureIdx
                  and match.trainIdx == rightViewFeatureIdx
                  and match.distance < 20.0) {

                mergeMatchMatrix[curr_viewL][curr_viewR].push_back(match);

                //Found a 2D feature match for the two 3D points - merge
                foundMatchingFeature = true;
                break;
              }
            }

            if (foundMatchingFeature) {
              //Add the new originating view, and feature index
              existingPoint.images[newKv.first] = newKv.second;

              foundAnyMatchingExistingViews = true;

            }
          }
        }
      }
      if (foundAnyMatchingExistingViews) {
        mergedPoints++;
        break; //Stop looking for more matching cloud points
      }
    }

    if (not foundAnyMatchingExistingViews and not foundMatching3DPoint) {
      //This point did not match any existing cloud points - add it as new.
      cloud.push_back(p);
      newPoints++;
    }
  }

  cout << " adding: " << cloud.size() << " (new: " << newPoints
    << ", merged: " << mergedPoints << ")" << endl;
} //merge_cloud end

StreamingWorker * create_worker(Callback *data
  , Callback *complete
  , Callback *error_callback, v8::Local<v8::Object> & options) {
 return new SfmData(data, complete, error_callback, options);
}

NODE_MODULE(addon, StreamWorkerWrapper::Init)

