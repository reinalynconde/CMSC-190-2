# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.2

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/joy/Documents/sp/backend/cpp_src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/joy/Documents/sp/backend/cpp_src

# Include any dependencies generated for this target.
include CMakeFiles/SFM.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/SFM.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/SFM.dir/flags.make

CMakeFiles/SFM.dir/StructureFromMotion.cpp.o: CMakeFiles/SFM.dir/flags.make
CMakeFiles/SFM.dir/StructureFromMotion.cpp.o: StructureFromMotion.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/joy/Documents/sp/backend/cpp_src/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/SFM.dir/StructureFromMotion.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/SFM.dir/StructureFromMotion.cpp.o -c /home/joy/Documents/sp/backend/cpp_src/StructureFromMotion.cpp

CMakeFiles/SFM.dir/StructureFromMotion.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/SFM.dir/StructureFromMotion.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/joy/Documents/sp/backend/cpp_src/StructureFromMotion.cpp > CMakeFiles/SFM.dir/StructureFromMotion.cpp.i

CMakeFiles/SFM.dir/StructureFromMotion.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/SFM.dir/StructureFromMotion.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/joy/Documents/sp/backend/cpp_src/StructureFromMotion.cpp -o CMakeFiles/SFM.dir/StructureFromMotion.cpp.s

CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.requires:
.PHONY : CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.requires

CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.provides: CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.requires
	$(MAKE) -f CMakeFiles/SFM.dir/build.make CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.provides.build
.PHONY : CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.provides

CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.provides.build: CMakeFiles/SFM.dir/StructureFromMotion.cpp.o

# Object files for target SFM
SFM_OBJECTS = \
"CMakeFiles/SFM.dir/StructureFromMotion.cpp.o"

# External object files for target SFM
SFM_EXTERNAL_OBJECTS =

SFM: CMakeFiles/SFM.dir/StructureFromMotion.cpp.o
SFM: CMakeFiles/SFM.dir/build.make
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_image.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_geometry.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_matching_image_collection.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_kvld.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_multiview.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_lInftyComputerVision.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_system.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_sfm.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/liblemon.a
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_numeric.so.1.3
SFM: /usr/lib/x86_64-linux-gnu/libjpeg.so
SFM: /usr/lib/x86_64-linux-gnu/libpng.so
SFM: /usr/lib/x86_64-linux-gnu/libz.so
SFM: /usr/lib/x86_64-linux-gnu/libtiff.so
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_matching.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_features.so.1.3
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libfast.a
SFM: /home/joy/Documents/openMVG_Build/openMVG_install/lib/libopenMVG_linearProgramming.so.1.3
SFM: CMakeFiles/SFM.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable SFM"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/SFM.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/SFM.dir/build: SFM
.PHONY : CMakeFiles/SFM.dir/build

CMakeFiles/SFM.dir/requires: CMakeFiles/SFM.dir/StructureFromMotion.cpp.o.requires
.PHONY : CMakeFiles/SFM.dir/requires

CMakeFiles/SFM.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/SFM.dir/cmake_clean.cmake
.PHONY : CMakeFiles/SFM.dir/clean

CMakeFiles/SFM.dir/depend:
	cd /home/joy/Documents/sp/backend/cpp_src && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/joy/Documents/sp/backend/cpp_src /home/joy/Documents/sp/backend/cpp_src /home/joy/Documents/sp/backend/cpp_src /home/joy/Documents/sp/backend/cpp_src /home/joy/Documents/sp/backend/cpp_src/CMakeFiles/SFM.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/SFM.dir/depend

