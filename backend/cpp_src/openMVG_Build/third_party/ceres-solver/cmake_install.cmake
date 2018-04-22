# Install script for directory: /home/joy/Documents/openMVG/src/third_party/ceres-solver

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
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/types.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/c_api.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/ceres.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/sized_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/normal_prior.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/solver.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/cubic_interpolation.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/dynamic_cost_function_to_functor.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/crs_matrix.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/autodiff_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/dynamic_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/loss_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/ordered_groups.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/gradient_checker.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/jet.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/local_parameterization.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/covariance.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/dynamic_autodiff_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/version.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/cost_function_to_functor.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/fpclassify.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/iteration_callback.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/numeric_diff_options.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/rotation.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/problem.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/dynamic_numeric_diff_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/gradient_problem_solver.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/gradient_problem.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/autodiff_local_parameterization.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/conditioned_cost_function.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/numeric_diff_cost_function.h")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres" TYPE FILE FILES
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/types.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/c_api.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/ceres.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/sized_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/normal_prior.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/solver.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/cubic_interpolation.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/dynamic_cost_function_to_functor.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/crs_matrix.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/autodiff_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/dynamic_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/loss_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/ordered_groups.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/gradient_checker.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/jet.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/local_parameterization.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/covariance.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/dynamic_autodiff_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/version.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/cost_function_to_functor.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/fpclassify.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/iteration_callback.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/numeric_diff_options.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/rotation.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/problem.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/dynamic_numeric_diff_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/gradient_problem_solver.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/gradient_problem.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/autodiff_local_parameterization.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/conditioned_cost_function.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/numeric_diff_cost_function.h"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/eigen.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/port.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/variadic_evaluate.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/macros.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/numeric_diff.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/reenable_warnings.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/manual_constructor.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/fixed_array.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/disable_warnings.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/autodiff.h;/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/scoped_ptr.h")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal" TYPE FILE FILES
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/eigen.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/port.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/variadic_evaluate.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/macros.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/numeric_diff.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/reenable_warnings.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/manual_constructor.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/fixed_array.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/disable_warnings.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/autodiff.h"
    "/home/joy/Documents/openMVG/src/third_party/ceres-solver/include/ceres/internal/scoped_ptr.h"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal/config.h")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/internal" TYPE FILE FILES "/home/joy/Documents/openMVG_Build/third_party/ceres-solver/config/ceres/internal/config.h")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/miniglog/glog/logging.h")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
file(INSTALL DESTINATION "/home/joy/Documents/openMVG_Build/openMVG_install/include/openMVG/third_party/ceres/miniglog/glog" TYPE FILE FILES "/home/joy/Documents/openMVG/src/third_party/ceres-solver/internal/ceres/miniglog/glog/logging.h")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/home/joy/Documents/openMVG_Build/third_party/ceres-solver/internal/ceres/cmake_install.cmake")

endif()

