# Install script for directory: /home/joy/Documents/openMVG/src/openMVG

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

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "headers")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/openMVG" TYPE DIRECTORY FILES "/home/joy/Documents/openMVG/src/openMVG/." FILES_MATCHING REGEX "/[^/]*\\.hpp$" REGEX "/[^/]*\\.h$")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/home/joy/Documents/openMVG_Build/openMVG/cameras/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/exif/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/features/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/graph/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/image/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/linearProgramming/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/geodesy/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/geometry/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/matching/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/matching_image_collection/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/multiview/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/numeric/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/robust_estimation/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/tracks/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/color_harmonization/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/system/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/sfm/cmake_install.cmake")
  include("/home/joy/Documents/openMVG_Build/openMVG/stl/cmake_install.cmake")

endif()

