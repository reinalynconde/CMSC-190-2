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
include dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/depend.make

# Include the progress variables for this target.
include dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/progress.make

# Include the compile flags for this target's objects.
include dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/flags.make

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/flags.make
dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o: /home/joy/Documents/openMVG/src/dependencies/osi_clp/Clp/src/OsiClp/OsiClpSolverInterface.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/joy/Documents/openMVG_Build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o"
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o -c /home/joy/Documents/openMVG/src/dependencies/osi_clp/Clp/src/OsiClp/OsiClpSolverInterface.cpp

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.i"
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/joy/Documents/openMVG/src/dependencies/osi_clp/Clp/src/OsiClp/OsiClpSolverInterface.cpp > CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.i

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.s"
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/joy/Documents/openMVG/src/dependencies/osi_clp/Clp/src/OsiClp/OsiClpSolverInterface.cpp -o CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.s

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.requires:
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.requires

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.provides: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.requires
	$(MAKE) -f dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/build.make dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.provides.build
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.provides

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.provides.build: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o

# Object files for target lib_OsiClpSolver
lib_OsiClpSolver_OBJECTS = \
"CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o"

# External object files for target lib_OsiClpSolver
lib_OsiClpSolver_EXTERNAL_OBJECTS =

Linux-x86_64-RELEASE/liblib_OsiClpSolver.a: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o
Linux-x86_64-RELEASE/liblib_OsiClpSolver.a: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/build.make
Linux-x86_64-RELEASE/liblib_OsiClpSolver.a: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX static library ../../../../../Linux-x86_64-RELEASE/liblib_OsiClpSolver.a"
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && $(CMAKE_COMMAND) -P CMakeFiles/lib_OsiClpSolver.dir/cmake_clean_target.cmake
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/lib_OsiClpSolver.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/build: Linux-x86_64-RELEASE/liblib_OsiClpSolver.a
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/build

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/requires: dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/OsiClpSolverInterface.cpp.o.requires
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/requires

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/clean:
	cd /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp && $(CMAKE_COMMAND) -P CMakeFiles/lib_OsiClpSolver.dir/cmake_clean.cmake
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/clean

dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/depend:
	cd /home/joy/Documents/openMVG_Build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/joy/Documents/openMVG/src /home/joy/Documents/openMVG/src/dependencies/osi_clp/Clp/src/OsiClp /home/joy/Documents/openMVG_Build /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp /home/joy/Documents/openMVG_Build/dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : dependencies/osi_clp/Clp/src/OsiClp/CMakeFiles/lib_OsiClpSolver.dir/depend

