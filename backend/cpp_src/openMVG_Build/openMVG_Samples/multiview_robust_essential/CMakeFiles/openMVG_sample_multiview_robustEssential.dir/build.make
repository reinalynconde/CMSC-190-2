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
CMAKE_SOURCE_DIR = /home/joy/Documents/openMVG/src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/joy/Documents/openMVG_Build

# Include any dependencies generated for this target.
include openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/depend.make

# Include the progress variables for this target.
include openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/progress.make

# Include the compile flags for this target's objects.
include openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/flags.make

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/flags.make
openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o: /home/joy/Documents/openMVG/src/openMVG_Samples/multiview_robust_essential/robust_essential.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/joy/Documents/openMVG_Build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o"
	cd /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o -c /home/joy/Documents/openMVG/src/openMVG_Samples/multiview_robust_essential/robust_essential.cpp

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.i"
	cd /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/joy/Documents/openMVG/src/openMVG_Samples/multiview_robust_essential/robust_essential.cpp > CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.i

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.s"
	cd /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/joy/Documents/openMVG/src/openMVG_Samples/multiview_robust_essential/robust_essential.cpp -o CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.s

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.requires:
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.requires

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.provides: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.requires
	$(MAKE) -f openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/build.make openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.provides.build
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.provides

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.provides.build: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o

# Object files for target openMVG_sample_multiview_robustEssential
openMVG_sample_multiview_robustEssential_OBJECTS = \
"CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o"

# External object files for target openMVG_sample_multiview_robustEssential
openMVG_sample_multiview_robustEssential_EXTERNAL_OBJECTS =

Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/build.make
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_image.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_multiview.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_system.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_geometry.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_matching.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_sfm.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_numeric.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: /usr/lib/x86_64-linux-gnu/libjpeg.so
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: /usr/lib/x86_64-linux-gnu/libpng.so
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: /usr/lib/x86_64-linux-gnu/libz.so
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: /usr/lib/x86_64-linux-gnu/libtiff.so
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_linearProgramming.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libopenMVG_features.so.1.3
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: Linux-x86_64-RELEASE/libfast.a
Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable ../../Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential"
	cd /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/openMVG_sample_multiview_robustEssential.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/build: Linux-x86_64-RELEASE/openMVG_sample_multiview_robustEssential
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/build

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/requires: openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/robust_essential.cpp.o.requires
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/requires

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/clean:
	cd /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential && $(CMAKE_COMMAND) -P CMakeFiles/openMVG_sample_multiview_robustEssential.dir/cmake_clean.cmake
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/clean

openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/depend:
	cd /home/joy/Documents/openMVG_Build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/joy/Documents/openMVG/src /home/joy/Documents/openMVG/src/openMVG_Samples/multiview_robust_essential /home/joy/Documents/openMVG_Build /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential /home/joy/Documents/openMVG_Build/openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : openMVG_Samples/multiview_robust_essential/CMakeFiles/openMVG_sample_multiview_robustEssential.dir/depend

