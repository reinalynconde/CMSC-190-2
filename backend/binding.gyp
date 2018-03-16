{
  # "variables": {
  #   "OPENMVG_INCLUDE_DIRS%": "/home/joy/Documents/openMVG_Build/openMVG_install/include;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG_dependencies;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG_dependencies/cereal/include;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/flann/src/cpp;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG",
  #   "OPENMVG_LIBRARIES%": "openMVG_image;openMVG_features;openMVG_geometry;openMVG_matching;openMVG_matching_image_collection;openMVG_kvld;openMVG_multiview;openMVG_lInftyComputerVision;openMVG_system;openMVG_sfm;lemon"
  # },
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "cpp_src/Reconstruction.cpp" ],
      "link_settings": {
        "libraries": [
          "-lopencv_calib3d",
          "-lopencv_core",
          "-lopencv_contrib",
          "-lopencv_features2d",
          "-lopencv_flann",
          "-lopencv_gpu",
          "-lopencv_highgui",
          "-lopencv_imgproc",
          "-lopencv_imgcodecs",
          "-lopencv_legacy",
          "-lopencv_ml",
          "-lopencv_objdetect",
          "-lopencv_xfeatures2d",
          "-lopenMVG_image",
          "-lopenMVG_features",
          "-lopenMVG_geometry",
          "-lopenMVG_matching",
          "-lopenMVG_matching_image_collection",
          "-lopenMVG_kvld",
          "-lopenMVG_multiview",
          "-lopenMVG_lInftyComputerVision",
          "-lopenMVG_system",
          "-lopenMVG_sfm",
          "-llemon",
          "-lstlplus",
          "-lvlsift",
          "-leasyexif"
          # "<@(OPENMVG_LIBRARIES)"
        ],
        "ldflags": [
          "-L/usr/local/lib",
          "-L/home/joy/Documents/openMVG_Build/openMVG_install/lib",
          "-Wl,-rpath,/home/joy/Documents/openMVG_Build/openMVG_install/lib"
        ]
      },
      "include_dirs": [
        # "<@(OPENMVG_INCLUDE_DIRS)"
        "/usr/include",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG_dependencies",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG_dependencies/cereal/include",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/flann/src/cpp",
        "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG"
      ],
      "cflags": [
        "-std=c++11"
      ],
      "cflags_cc!": [
        "-fno-rtti",
        "-fno-exceptions"
      ]
    }
  ]
}