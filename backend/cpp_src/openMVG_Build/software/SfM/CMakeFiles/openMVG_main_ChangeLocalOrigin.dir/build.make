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
include software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/depend.make

# Include the progress variables for this target.
include software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/progress.make

# Include the compile flags for this target's objects.
include software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/flags.make

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/flags.make
software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o: /home/joy/Documents/openMVG/src/software/SfM/main_ChangeLocalOrigin.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/joy/Documents/openMVG_Build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o"
	cd /home/joy/Documents/openMVG_Build/software/SfM && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o -c /home/joy/Documents/openMVG/src/software/SfM/main_ChangeLocalOrigin.cpp

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.i"
	cd /home/joy/Documents/openMVG_Build/software/SfM && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/joy/Documents/openMVG/src/software/SfM/main_ChangeLocalOrigin.cpp > CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.i

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.s"
	cd /home/joy/Documents/openMVG_Build/software/SfM && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/joy/Documents/openMVG/src/software/SfM/main_ChangeLocalOrigin.cpp -o CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.s

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.requires:
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.requires

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.provides: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.requires
	$(MAKE) -f software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/build.make software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.provides.build
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.provides

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.provides.build: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o

# Object files for target openMVG_main_ChangeLocalOrigin
openMVG_main_ChangeLocalOrigin_OBJECTS = \
"CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o"

# External object files for target openMVG_main_ChangeLocalOrigin
openMVG_main_ChangeLocalOrigin_EXTERNAL_OBJECTS =

Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/build.make
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_system.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_image.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_features.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_sfm.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_geometry.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libstlplus.a
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_numeric.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: /usr/lib/x86_64-linux-gnu/libjpeg.so
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: /usr/lib/x86_64-linux-gnu/libpng.so
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: /usr/lib/x86_64-linux-gnu/libz.so
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: /usr/lib/x86_64-linux-gnu/libtiff.so
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libfast.a
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: Linux-x86_64-RELEASE/libopenMVG_linearProgramming.so.1.3
Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable ../../Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin"
	cd /home/joy/Documents/openMVG_Build/software/SfM && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/build: Linux-x86_64-RELEASE/openMVG_main_ChangeLocalOrigin
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/build

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/requires: software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/main_ChangeLocalOrigin.cpp.o.requires
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/requires

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/clean:
	cd /home/joy/Documents/openMVG_Build/software/SfM && $(CMAKE_COMMAND) -P CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/cmake_clean.cmake
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/clean

software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/depend:
	cd /home/joy/Documents/openMVG_Build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/joy/Documents/openMVG/src /home/joy/Documents/openMVG/src/software/SfM /home/joy/Documents/openMVG_Build /home/joy/Documents/openMVG_Build/software/SfM /home/joy/Documents/openMVG_Build/software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : software/SfM/CMakeFiles/openMVG_main_ChangeLocalOrigin.dir/depend

