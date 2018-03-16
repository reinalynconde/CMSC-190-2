#include "opencv2/core.hpp"
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include "opencv2/xfeatures2d.hpp"
#include "opencv2/flann/miniflann.hpp"

#include "openMVG/features/svg_features.hpp"
#include "openMVG/features/sift/SIFT_Anatomy_Image_Describer.hpp"
#include "openMVG/image/image_io.hpp"
#include "openMVG/image/image_concat.hpp"
#include "openMVG/matching/regions_matcher.hpp"
#include "openMVG/exif/exif_IO_EasyExif.hpp"
#include "openMVG/multiview/solver_fundamental_kernel.hpp"
#include "openMVG/numeric/eigen_alias_definition.hpp"
#include "openMVG/robust_estimation/robust_estimator_ACRansac.hpp"
#include "openMVG/robust_estimation/robust_estimator_ACRansacKernelAdaptator.hpp"

#include "third_party/stlplus3/filesystemSimplified/file_system.hpp"

#include <cstdlib>
#include <fstream>
#include <iostream>
#include <memory>
#include <stdio.h>
#include <string>
#include <utility>
#include <node.h>

using namespace cv;
using namespace cv::xfeatures2d;
using namespace openMVG;
using namespace openMVG::image;
using namespace openMVG::exif;
using namespace openMVG::features;
using namespace openMVG::matching;
using namespace openMVG::robust;
using namespace std;
using namespace stlplus;
using namespace v8;

int checkFolders(string input, string output) {
  if (!folder_exists(input)) {
    cerr << "\nThe input directory does not exist" << endl;
    return EXIT_FAILURE;
  }

  if (output.empty()) {
    cerr << "\nInvalid output directory" << endl;
    return EXIT_FAILURE;
  }

  if (!folder_exists(output)) {
    std::cout << "Output directory does not exist. Will try to create now..."
      << endl;
    if (!folder_create(output)) {
      cerr << "\nCannot create output directory" << endl;
      return EXIT_FAILURE;
    }
  }

  return EXIT_SUCCESS;
}

cv::Mat preprocess(string fullFilename, string outputDir, vector<string>::const_iterator iter_image) {
  //read image
  std::cout << "Reading image: " << fullFilename << "..." << endl;
  cv::Mat image = imread(fullFilename, CV_LOAD_IMAGE_COLOR);
  cv::Mat output;

  if(image.empty()) {
    cerr << "Image is empty." << endl;
    return output;
  }
  
  vector<cv::Mat> channels;
  cv::Mat conv;

  cvtColor(image, conv, COLOR_BGR2Lab);
  split(conv, channels);

  std::cout << "Applying CLAHE..." << endl;
  Ptr<CLAHE> clahe = createCLAHE(2.0, Size(8,8));
  clahe->apply(channels[0], channels[0]);

  merge(channels, conv);
  cvtColor(conv, conv, COLOR_Lab2BGR);

  std::cout << "Applying bilateral filter..." << endl;
  //bilateral filter is used to remove unwanted noise while preserving edges
  bilateralFilter(conv, output, 5, 50.0, 50.0, BORDER_DEFAULT);

  std::cout << "Writing image: " << outputDir << "/" << *iter_image << "...\n" << endl;
  imwrite(outputDir + "/" + *iter_image, output);

  return output;
}

void detectFeatures(Ptr<Feature2D> sift, cv::Mat img, vector<vector<KeyPoint>> &kps, vector<cv::Mat> &dss) {
  std::cout << "Detecting features..." << endl;
  vector<KeyPoint> kp;
  cv::Mat ds;
  cv::Mat empty;

  //sift computation
  sift->detectAndCompute(img, empty, kp, ds);

  kps.push_back(kp);
  dss.push_back(ds);

  std::cout << "features exit" << endl;
}

openMVG::Mat robust_fundamental(Image<unsigned char> img1, Image<unsigned char> img2) {
  unique_ptr<Image_describer> img_desc(new SIFT_Anatomy_Image_describer);
  map<IndexT, unique_ptr<Regions>> regions_per_img;
  img_desc->Describe(img1, regions_per_img[0]);
  img_desc->Describe(img2, regions_per_img[1]);

  SIFT_Regions * regions_i = dynamic_cast<SIFT_Regions*>
    (regions_per_img.at(0).get());
  SIFT_Regions * regions_j = dynamic_cast<SIFT_Regions*>
    (regions_per_img.at(1).get());

  PointFeatures
    feats_i = regions_per_img.at(0)->GetRegionsPositions(),
    feats_j = regions_per_img.at(1)->GetRegionsPositions();

  vector<IndMatch> putative_matches;
  DistanceRatioMatch(0.8, ANN_L2, *regions_per_img.at(0).get(),
    *regions_per_img.at(1).get(), putative_matches);

  //Fundamental geometry filtering
  size_t pm_size = putative_matches.size();
  openMVG::Mat first(2, pm_size);
  openMVG::Mat second(2, pm_size);

  for(size_t m = 0; m < pm_size; ++m) {
    const PointFeature &ima_first = feats_i[putative_matches[m].i_];
    const PointFeature &ima_second = feats_j[putative_matches[m].j_];

    first.col(m) = ima_first.coords().cast<double>();
    second.col(m) = ima_second.coords().cast<double>();
  }

  //robust estimation
  vector<uint32_t> inliers;
  using KernelType =
  ACKernelAdaptor<
    fundamental::kernel::SevenPointSolver,
    fundamental::kernel::SymmetricEpipolarDistanceError,
    UnnormalizerT,
    Mat3>;

  KernelType kernel(
  first, img1.Width(), img1.Height(),
  second, img2.Width(), img2.Height(),
  true); // configure as point to line error model.

  openMVG::Mat F;
  const pair<double,double> ACRansacOut = ACRANSAC(kernel, inliers, 1024, &F,
  Square(4.0), // Upper bound of authorized threshold
  true);
  const double & thresholdF = ACRansacOut.first;

  size_t inl_size;

  if(inl_size < KernelType::MINIMUM_SAMPLES * 2.5) {
    std::cout << "ACRANSAC was unable to estimate a rigid fundamental"
    << endl;
    return NULL;
  }

  std::cout << "\nFound a fundamental under the confidence threshold of: "
    << thresholdF << " pixels\n\twith: " << vec_inliers.size() << " inliers"
    << " from: " << pm_size
    << " putatives correspondences"
    << endl;

  vector<double> residuals(inl_size, 0.0);

  for(size_t x = 0; x < inl_size; ++x) {
    const SIOPointFeature & ffirst = regions_i->Features()[putative_matchesinliers[x]].i_];
    const SIOPointFeature & ssecond = regions_j->Features()[putative_matches[inliers[x]].j_];
    // residual computation
    residuals[i] = std::sqrt(KernelType::ErrorT::Error(F,
                                    ffirst.coords().cast<double>(),
                                    ssecond.coords().cast<double>()));
  }

  // Display some statistics of reprojection errors
  float dMin, dMax, dMean, dMedian;
  minMaxMeanMedian<float>(vec_residuals.begin(), vec_residuals.end(),
                        dMin, dMax, dMean, dMedian);

  std::cout << endl
    << "Fundamental matrix estimation, residuals statistics:" << "\n"
    << "\t-- Residual min:\t" << dMin << endl
    << "\t-- Residual median:\t" << dMedian << endl
    << "\t-- Residual max:\t "  << dMax << endl
    << "\t-- Residual mean:\t " << dMean << endl;

  return F;
}

vector<openMVG::Mat> match(vector<Image<unsigned char>> imgs) {
  //vector<vector<DMatch>> match(vector<Mat> dss) {
  std::cout << "Mathing images..." << endl;
  /* vector<vector<DMatch>> m;
  for(int i = 0; i < dss.size(); i++) {
    for(int j = 0; j < dss.size(); j++) {
      vector<DMatch> pair = matchPairs(dss.at(i), dss.at(j));
      m.push_back(pair);
    }
  }
   */

  vector<openMVG::Mat> f_matrices;
  for(int i = 0; i < imgs.size(); i++) {
    for(int j = 0; j < imgs.size(); j++) {
      f_matrices.push_back(robust_fundamental(imgs.at(i), imgs.at(j)));
    }
  }

  std::cout << "All matches acquired!" << endl;
  return f_matrices;
}

vector<DMatch> matchPairs(cv::Mat ds1, cv::Mat ds2) {
  std::cout << "Mathing pairs..." << endl;
  FlannBasedMatcher matcher;
  vector<DMatch> matches;
  matcher.match(ds1, ds2, matches);

  double max_dist = 0; double min_dist = 100;

  //-- Quick calculation of max and min distances between keypoints
  for( int i = 0; i < ds1.rows; i++ )
  { double dist = matches[i].distance;
    std::cout << "distance = " << dist << endl;
    if( dist < min_dist ) min_dist = dist;
    if( dist > max_dist ) max_dist = dist;
  }

  printf("-- Max dist : %f \n", max_dist );
  printf("-- Min dist : %f \n", min_dist );

  //-- Draw only "good" matches (i.e. whose distance is less than 2*min_dist,
  //-- or a small arbitary value ( 0.02 ) in the event that min_dist is very
  //-- small)
  //-- PS.- radiusMatch can also be used here.
  std::vector<DMatch> good_matches;

  for(int i = 0; i < ds1.rows; i++ ) {
    if(matches[i].distance <= max(2*min_dist, 0.02))
      good_matches.push_back( matches[i]);
  }

  std::cout << "Matching done!" << endl;
  return good_matches;
}

void reconstruct(const FunctionCallbackInfo<Value>& args) {
  //process input arguments
  Isolate* isolate = args.GetIsolate();

  if (args.Length() < 4) {
    // Throw an Error that is passed back to JavaScript
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  string inputDir(* v8::String::Utf8Value(args[0]->ToString()));
  string outputDir(* v8::String::Utf8Value(args[1]->ToString()));
  double sensorSize = args[2]->NumberValue();
  double focalLength = args[3]->NumberValue();

  //check validity of folders
  int areFoldersValid = checkFolders(inputDir, outputDir);

  if(areFoldersValid == EXIT_FAILURE)
    return;

  //get images
  vector<string> images = folder_files(inputDir);
  sort(images.begin(), images.end());

  // double width, height, ppx, ppy, focal;

  //init sift detector
  Ptr<Feature2D> sift = SIFT::create();
  vector<vector<KeyPoint>> kps;   //collection of keypoints
  vector<cv::Mat> dss;    //collection of desc

  vector<Image<unsigned char>> imgs;
 
  ostringstream error_report_stream;
  for(vector<string>::const_iterator
    iter_image = images.begin();
    iter_image != images.end(); iter_image++) {
    const string fullFilename = create_filespec(inputDir, 
      *iter_image);
    const string filenamePart = filename_part(fullFilename);

    //check validity of image format
    if(GetFormat(fullFilename.c_str()) == Unknown) {
      error_report_stream << filenamePart << ": Unkown image file format." 
        << "\n";
      continue;
    }

    //read image header
    ImageHeader imgHeader;

    if(!ReadImageHeader(fullFilename.c_str(), &imgHeader))
      continue;

    //parse EXIF data of the image
    unique_ptr<Exif_IO> exifReader(new Exif_IO_EasyExif);
    exifReader->open(fullFilename);

    const bool hasValidExifMetadata = exifReader->doesHaveExifInfo()
      && !exifReader->getModel().empty();

    float exif_focal = exifReader->getFocal();
    // focal = max(width, height) * exif_focal / sensorSize;

    //preprocess image
    cv::Mat img = preprocess(fullFilename, outputDir, iter_image);

    Image<unsigned char> imge;
    ReadImage(fullFilename.c_str(), &imge);
    imgs.push_back(imge);

    //detect features
    // detectFeatures(sift, img, kps, dss);

    std::cout << "LOOP END" << endl;
  }

  // match(vector<Mat> dss);
  vector<openMVG::Mat> f_matrices = match(imgs);
  
  return;
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "reconstruct", reconstruct);
  return;
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)