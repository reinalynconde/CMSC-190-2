#----------------------------------------------------------------
# Generated CMake target import file for configuration "RELEASE".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "lib_CoinUtils" for configuration "RELEASE"
set_property(TARGET lib_CoinUtils APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(lib_CoinUtils PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/liblib_CoinUtils.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS lib_CoinUtils )
list(APPEND _IMPORT_CHECK_FILES_FOR_lib_CoinUtils "${_IMPORT_PREFIX}/lib/liblib_CoinUtils.a" )

# Import target "lib_Osi" for configuration "RELEASE"
set_property(TARGET lib_Osi APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(lib_Osi PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/liblib_Osi.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS lib_Osi )
list(APPEND _IMPORT_CHECK_FILES_FOR_lib_Osi "${_IMPORT_PREFIX}/lib/liblib_Osi.a" )

# Import target "lib_clp" for configuration "RELEASE"
set_property(TARGET lib_clp APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(lib_clp PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/liblib_clp.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS lib_clp )
list(APPEND _IMPORT_CHECK_FILES_FOR_lib_clp "${_IMPORT_PREFIX}/lib/liblib_clp.a" )

# Import target "lib_OsiClpSolver" for configuration "RELEASE"
set_property(TARGET lib_OsiClpSolver APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(lib_OsiClpSolver PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/liblib_OsiClpSolver.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS lib_OsiClpSolver )
list(APPEND _IMPORT_CHECK_FILES_FOR_lib_OsiClpSolver "${_IMPORT_PREFIX}/lib/liblib_OsiClpSolver.a" )

# Import target "stlplus" for configuration "RELEASE"
set_property(TARGET stlplus APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(stlplus PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libstlplus.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS stlplus )
list(APPEND _IMPORT_CHECK_FILES_FOR_stlplus "${_IMPORT_PREFIX}/lib/libstlplus.a" )

# Import target "lemon" for configuration "RELEASE"
set_property(TARGET lemon APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(lemon PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/liblemon.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS lemon )
list(APPEND _IMPORT_CHECK_FILES_FOR_lemon "${_IMPORT_PREFIX}/lib/liblemon.a" )

# Import target "cxsparse" for configuration "RELEASE"
set_property(TARGET cxsparse APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(cxsparse PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C"
  IMPORTED_LINK_INTERFACE_LIBRARIES_RELEASE "m"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libcxsparse.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS cxsparse )
list(APPEND _IMPORT_CHECK_FILES_FOR_cxsparse "${_IMPORT_PREFIX}/lib/libcxsparse.a" )

# Import target "ceres" for configuration "RELEASE"
set_property(TARGET ceres APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ceres PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LINK_INTERFACE_LIBRARIES_RELEASE "cxsparse;/usr/lib/liblapack.so;/usr/lib/libf77blas.so;/usr/lib/libatlas.so;/usr/lib/libf77blas.so;/usr/lib/libatlas.so;gomp;-pthread"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libceres.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS ceres )
list(APPEND _IMPORT_CHECK_FILES_FOR_ceres "${_IMPORT_PREFIX}/lib/libceres.a" )

# Import target "easyexif" for configuration "RELEASE"
set_property(TARGET easyexif APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(easyexif PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libeasyexif.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS easyexif )
list(APPEND _IMPORT_CHECK_FILES_FOR_easyexif "${_IMPORT_PREFIX}/lib/libeasyexif.a" )

# Import target "fast" for configuration "RELEASE"
set_property(TARGET fast APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(fast PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libfast.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS fast )
list(APPEND _IMPORT_CHECK_FILES_FOR_fast "${_IMPORT_PREFIX}/lib/libfast.a" )

# Import target "openMVG_features" for configuration "RELEASE"
set_property(TARGET openMVG_features APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_features PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_features.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_features.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_features )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_features "${_IMPORT_PREFIX}/lib/libopenMVG_features.so.1.3" )

# Import target "openMVG_image" for configuration "RELEASE"
set_property(TARGET openMVG_image APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_image PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_image.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_image.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_image )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_image "${_IMPORT_PREFIX}/lib/libopenMVG_image.so.1.3" )

# Import target "openMVG_linearProgramming" for configuration "RELEASE"
set_property(TARGET openMVG_linearProgramming APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_linearProgramming PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_linearProgramming.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_linearProgramming.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_linearProgramming )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_linearProgramming "${_IMPORT_PREFIX}/lib/libopenMVG_linearProgramming.so.1.3" )

# Import target "openMVG_lInftyComputerVision" for configuration "RELEASE"
set_property(TARGET openMVG_lInftyComputerVision APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_lInftyComputerVision PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_lInftyComputerVision.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_lInftyComputerVision.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_lInftyComputerVision )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_lInftyComputerVision "${_IMPORT_PREFIX}/lib/libopenMVG_lInftyComputerVision.so.1.3" )

# Import target "openMVG_geometry" for configuration "RELEASE"
set_property(TARGET openMVG_geometry APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_geometry PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_geometry.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_geometry.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_geometry )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_geometry "${_IMPORT_PREFIX}/lib/libopenMVG_geometry.so.1.3" )

# Import target "openMVG_matching" for configuration "RELEASE"
set_property(TARGET openMVG_matching APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_matching PROPERTIES
  IMPORTED_LINK_DEPENDENT_LIBRARIES_RELEASE "openMVG_features"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_matching.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_matching.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_matching )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_matching "${_IMPORT_PREFIX}/lib/libopenMVG_matching.so.1.3" )

# Import target "openMVG_kvld" for configuration "RELEASE"
set_property(TARGET openMVG_kvld APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_kvld PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_kvld.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_kvld.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_kvld )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_kvld "${_IMPORT_PREFIX}/lib/libopenMVG_kvld.so.1.3" )

# Import target "openMVG_matching_image_collection" for configuration "RELEASE"
set_property(TARGET openMVG_matching_image_collection APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_matching_image_collection PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_matching_image_collection.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_matching_image_collection.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_matching_image_collection )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_matching_image_collection "${_IMPORT_PREFIX}/lib/libopenMVG_matching_image_collection.so.1.3" )

# Import target "openMVG_multiview" for configuration "RELEASE"
set_property(TARGET openMVG_multiview APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_multiview PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_multiview.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_multiview.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_multiview )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_multiview "${_IMPORT_PREFIX}/lib/libopenMVG_multiview.so.1.3" )

# Import target "openMVG_numeric" for configuration "RELEASE"
set_property(TARGET openMVG_numeric APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_numeric PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_numeric.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_numeric.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_numeric )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_numeric "${_IMPORT_PREFIX}/lib/libopenMVG_numeric.so.1.3" )

# Import target "openMVG_system" for configuration "RELEASE"
set_property(TARGET openMVG_system APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_system PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_system.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_system.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_system )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_system "${_IMPORT_PREFIX}/lib/libopenMVG_system.so.1.3" )

# Import target "openMVG_sfm" for configuration "RELEASE"
set_property(TARGET openMVG_sfm APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(openMVG_sfm PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libopenMVG_sfm.so.1.3"
  IMPORTED_SONAME_RELEASE "libopenMVG_sfm.so.1"
  )

list(APPEND _IMPORT_CHECK_TARGETS openMVG_sfm )
list(APPEND _IMPORT_CHECK_FILES_FOR_openMVG_sfm "${_IMPORT_PREFIX}/lib/libopenMVG_sfm.so.1.3" )

# Import target "vlsift" for configuration "RELEASE"
set_property(TARGET vlsift APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(vlsift PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libvlsift.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS vlsift )
list(APPEND _IMPORT_CHECK_FILES_FOR_vlsift "${_IMPORT_PREFIX}/lib/libvlsift.a" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
