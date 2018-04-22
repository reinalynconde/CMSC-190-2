# Install script for directory: /home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/joy/Documents/openMVG_Build/openMVG_install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "RELEASE")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Devel")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/AdolcForward;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/AlignedVector3;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/ArpackSupport;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/AutoDiff;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/BVH;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/EulerAngles;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/FFT;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/IterativeSolvers;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/KroneckerProduct;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/LevenbergMarquardt;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/MatrixFunctions;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/MoreVectorization;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/MPRealSupport;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/NonLinearOptimization;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/NumericalDiff;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/OpenGLSupport;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/Polynomials;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/Skyline;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/SparseExtra;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/SpecialFunctions;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/Splines")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen" TYPE FILE FILES
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/AdolcForward"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/AlignedVector3"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/ArpackSupport"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/AutoDiff"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/BVH"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/EulerAngles"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/FFT"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/IterativeSolvers"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/KroneckerProduct"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/LevenbergMarquardt"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/MatrixFunctions"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/MoreVectorization"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/MPRealSupport"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/NonLinearOptimization"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/NumericalDiff"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/OpenGLSupport"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/Polynomials"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/Skyline"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/SparseExtra"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/SpecialFunctions"
    "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/Splines"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Devel")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen/src")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen/unsupported/Eigen" TYPE DIRECTORY FILES "/home/joy/Documents/openMVG/src/third_party/eigen/unsupported/Eigen/src" FILES_MATCHING REGEX "/[^/]*\\.h$")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/home/joy/Documents/openMVG_Build/third_party/eigen/unsupported/Eigen/CXX11/cmake_install.cmake")

endif()

