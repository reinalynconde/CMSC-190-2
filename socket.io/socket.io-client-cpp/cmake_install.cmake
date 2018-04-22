# Install script for directory: /home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Release")
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
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/include/sio_message.h;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/include/sio_client.h;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/include/sio_socket.h")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/include" TYPE FILE FILES
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/src/sio_message.h"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/src/sio_client.h"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/src/sio_socket.h"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  foreach(file
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1.6.0"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_CHECK
           FILE "${file}"
           RPATH "")
    endif()
  endforeach()
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1.6.0;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release" TYPE SHARED_LIBRARY FILES
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient.so.1.6.0"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient.so.1"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient.so"
    )
  foreach(file
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1.6.0"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so.1"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_REMOVE
           FILE "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  foreach(file
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1.6.0"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_CHECK
           FILE "${file}"
           RPATH "")
    endif()
  endforeach()
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1.6.0;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release" TYPE SHARED_LIBRARY FILES
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient_tls.so.1.6.0"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient_tls.so.1"
    "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/libsioclient_tls.so"
    )
  foreach(file
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1.6.0"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so.1"
      "$ENV{DESTDIR}/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libsioclient_tls.so"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_REMOVE
           FILE "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libboost_system.so;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libboost_date_time.so;/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release/libboost_random.so")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/build/lib/Release" TYPE FILE FILES
    "/home/joy/Documents/sp/backend/socket.io/boost_install/lib/libboost_system.so"
    "/home/joy/Documents/sp/backend/socket.io/boost_install/lib/libboost_date_time.so"
    "/home/joy/Documents/sp/backend/socket.io/boost_install/lib/libboost_random.so"
    )
endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "/home/joy/Documents/sp/backend/socket.io/socket.io-client-cpp/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
