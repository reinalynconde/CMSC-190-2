# Install script for directory: /home/joy/Documents/openMVG/src/openMVG/numeric

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

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so.1.3"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so.1"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_CHECK
           FILE "${file}"
           RPATH "")
    endif()
  endforeach()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES
    "/home/joy/Documents/openMVG_Build/Linux-x86_64-RELEASE/libopenMVG_numeric.so.1.3"
    "/home/joy/Documents/openMVG_Build/Linux-x86_64-RELEASE/libopenMVG_numeric.so.1"
    "/home/joy/Documents/openMVG_Build/Linux-x86_64-RELEASE/libopenMVG_numeric.so"
    )
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so.1.3"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so.1"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libopenMVG_numeric.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

