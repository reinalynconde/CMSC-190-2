#include "sio_client.h"
#include "sio_message.h"

#include "opencv2/core/core.hpp"
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include "opencv2/xfeatures2d.hpp"

#include "openMVG/features/feature.hpp"
#include "openMVG/features/sift/SIFT_Anatomy_Image_Describer.hpp"
#include "openMVG/image/image_io.hpp"
#include "openMVG/numeric/eigen_alias_definition.hpp"
#include "openMVG/matching/regions_matcher.hpp"
#include "openMVG/sfm/sfm_data.hpp"
#include "openMVG/sfm/sfm_data_io.hpp"

#include "third_party/stlplus3/filesystemSimplified/file_system.hpp"

#include <ceres/ceres.h>
#include <ceres/rotation.h>

#include <cstdlib>
// #include <iostream>
#include <map>
#include <set>
#include <stdio.h>
#include <string>
#include <utility>
// #include <chrono>
#include <thread>
#include <iostream>
#include <chrono>
#include <random>
#include <thread>
#include "streaming-worker.h"
// #include <condition_variable>
#include <mutex>

using namespace cv;
using namespace openMVG;
using namespace openMVG::features;
using namespace openMVG::matching;
using namespace std;

// namespace SFM {
  typedef vector<KeyPoint> KeyPoints;
  typedef vector<Point2f>  Points2f;
  typedef vector<Point3f>  Points3f;

  struct Image_data {
    cv::Mat actual_image;
    int width, height;
    float focal, ppx, ppy;
    string fname;
  };

  struct Describer {
    KeyPoints keypoints;
    Points2f points;
    cv::Mat descriptors;
  };

  struct Image2D3D {
    Points2f points2D;
    Points3f points3D;
  };

  struct Intrinsic_data {
    cv::Mat K, K_inv, distortion;
  };

  struct APair {
    size_t first, second;
  };

  struct Point3D {
    Point3f p;
    map<int, int> images;
  };

  /* 
  From: http://ceres-solver.org/nnls_tutorial.html#bundle-adjustment
   */
  struct SnavelyReprojectionError {
    SnavelyReprojectionError(double observed_x, double observed_y)
      : observed_x(observed_x), observed_y(observed_y) { }

    template<typename T>
    bool operator()(const T* const camera,
    				        const T* const point,
					          const T* const focal,
                    T* residuals) const {
      // camera[0,1,2] are the angle-axis rotation.
      T p[3];
      ceres::AngleAxisRotatePoint(camera, point, p);
      // camera[3,4,5] are the translation.
      p[0] += camera[3];
      p[1] += camera[4];
      p[2] += camera[5];

    // Compute the center of distortion. The sign change comes from
    // the camera model that Noah Snavely's Bundler assumes, whereby
    // the camera coordinate system has a negative z axis.
        const T xp = p[0] / p[2];
        const T yp = p[1] / p[2];

        // Compute final projected point position.
        const T predicted_x = *focal * xp;
        const T predicted_y = *focal * yp;

        // The error is the difference between the predicted and observed position.
        residuals[0] = predicted_x - T(observed_x);
        residuals[1] = predicted_y - T(observed_y);
        return true;
    }
    // Factory to hide the construction of the CostFunction object from
    // the client code.
    static ceres::CostFunction* Create(const double observed_x, const double observed_y) {
        return (new ceres::AutoDiffCostFunction<SnavelyReprojectionError, 2, 6, 3, 1>(
                new SnavelyReprojectionError(observed_x, observed_y)));
    }
    double observed_x;
    double observed_y;
  };

  typedef vector<IndMatch> PMatches;
  typedef vector<DMatch> Matching;
  typedef vector<vector<Matching>> Matches;
  typedef map<int, Image2D3D> Image2D3Ds;
  typedef vector<Point3D> PointCloud;

  class SfmData : public StreamingWorker{
    public:
      SfmData(Callback *data, Callback *complete, Callback *error_callback,  v8::Local<v8::Object> & options); 
      virtual ~SfmData();

      string uname;


      void Execute (const AsyncProgressWorker::ExecutionProgress& progress);
      bool set_dir(const AsyncProgressWorker::ExecutionProgress& prog, const string input_dir, const string output_dir,
        const string user);
      bool reconstruct(const AsyncProgressWorker::ExecutionProgress& prog);

    private:
      map<float, APair> rank_matches();
      Image2D3Ds match_2D_3D();
      void detect_features(const AsyncProgressWorker::ExecutionProgress& prog);
      bool feature_match(const AsyncProgressWorker::ExecutionProgress& prog);
      void select_initial_pair();
      void adj_bundle();
      void add_camera(const AsyncProgressWorker::ExecutionProgress& prog);
      void merge_cloud(const PointCloud &cloud);
      void send_progress(const AsyncProgressWorker::ExecutionProgress& progress, string message, double percent, int step);

      vector<Image_data> images;
      vector<Describer> describer;
      vector<Matx34f> poses;
      set<int> done_v;
      set<int> good_v;
      Matches matches;
      Intrinsic_data intrinsics;
      PointCloud cloud;
      string output_dir;
      string input_dirr;
  };

  class connection_listener {
    sio::client &handler;

    public:
      bool connect_finish;
      // std::mutex _lock;
      // std::condition_variable_any _cond;
      
      connection_listener(sio::client& h):
      handler(h)
      {
      }   

      void on_connected()
      {
        std::cout<< "Connected!" << std::endl;
          // _lock.lock();
          // _cond.notify_all();
          connect_finish = true;
          // _lock.unlock();
      }
      void on_close(sio::client::close_reason const& reason)
      {
          std::cout<<"sio closed "<<std::endl;
          exit(0);
          // return;
      }
      
      void on_fail()
      {
          std::cout<<"sio failed "<<std::endl;
          exit(0);
          // return;
      }
  };
// }
