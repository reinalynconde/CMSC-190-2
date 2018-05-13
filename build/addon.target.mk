# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := addon
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=addon' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-Wall \
	-std=c++11 \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++0x

INCS_Debug := \
	-I/home/ubuntu/.node-gyp/6.14.2/include/node \
	-I/home/ubuntu/.node-gyp/6.14.2/src \
	-I/home/ubuntu/.node-gyp/6.14.2/deps/uv/include \
	-I/home/ubuntu/.node-gyp/6.14.2/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I$(srcdir)/node_modules/streaming-worker-sdk \
	-I/usr/include \
	-I/eigen3 \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG_dependencies \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG_dependencies/cereal/include \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG/third_party/flann/src/cpp \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG \
	-I/home/ubuntu/origami/cpp_src \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/src \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/lib/rapidjson/include \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/lib/websocketpp \
	-I/home/ubuntu/origami/socket.io/boost_install/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=addon' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-Wall \
	-std=c++11 \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++0x

INCS_Release := \
	-I/home/ubuntu/.node-gyp/6.14.2/include/node \
	-I/home/ubuntu/.node-gyp/6.14.2/src \
	-I/home/ubuntu/.node-gyp/6.14.2/deps/uv/include \
	-I/home/ubuntu/.node-gyp/6.14.2/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I$(srcdir)/node_modules/streaming-worker-sdk \
	-I/usr/include \
	-I/eigen3 \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG_dependencies \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG_dependencies/cereal/include \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG/third_party/eigen \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG/third_party/flann/src/cpp \
	-I/home/ubuntu/lib/openMVG_Build/openMVG_install/include/openMVG \
	-I/home/ubuntu/origami/cpp_src \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/src \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/lib/rapidjson/include \
	-I/home/ubuntu/origami/socket.io/socket.io-client-cpp/lib/websocketpp \
	-I/home/ubuntu/origami/socket.io/boost_install/include

OBJS := \
	$(obj).target/$(TARGET)/cpp_src/StructureFromMotion.o \
	$(obj).target/$(TARGET)/socket.io/socket.io-client-cpp/src/sio_client.o \
	$(obj).target/$(TARGET)/socket.io/socket.io-client-cpp/src/sio_socket.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64 \
	-L/home/ubuntu/origami/socket.io/socket.io-client-cpp/build/lib/Release \
	-Wl,-rpath,/home/ubuntu/origami/socket.io/socket.io-client-cpp/build/lib/Release \
	-L/home/ubuntu/origami/socket.io/boost_install/lib \
	-Wl,-rpath,/home/ubuntu/origami/socket.io/boost_install/lib \
	-L/usr/local/lib \
	-L/home/ubuntu/lib/openMVG_Build/openMVG_install/lib \
	-Wl,-rpath,/home/ubuntu/lib/openMVG_Build/openMVG_install/lib

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64 \
	-L/home/ubuntu/origami/socket.io/socket.io-client-cpp/build/lib/Release \
	-Wl,-rpath,/home/ubuntu/origami/socket.io/socket.io-client-cpp/build/lib/Release \
	-L/home/ubuntu/origami/socket.io/boost_install/lib \
	-Wl,-rpath,/home/ubuntu/origami/socket.io/boost_install/lib \
	-L/usr/local/lib \
	-L/home/ubuntu/lib/openMVG_Build/openMVG_install/lib \
	-Wl,-rpath,/home/ubuntu/lib/openMVG_Build/openMVG_install/lib

LIBS := \
	-lopencv_calib3d \
	-lopencv_core \
	-lopencv_features2d \
	-lopencv_flann \
	-lopencv_highgui \
	-lopencv_imgproc \
	-lopencv_imgcodecs \
	-lopencv_ml \
	-lopencv_objdetect \
	-lopencv_xfeatures2d \
	-lopenMVG_image \
	-lopenMVG_features \
	-lopenMVG_geometry \
	-lopenMVG_matching \
	-lopenMVG_matching_image_collection \
	-lopenMVG_kvld \
	-lopenMVG_multiview \
	-lopenMVG_lInftyComputerVision \
	-lopenMVG_system \
	-lopenMVG_sfm \
	-llemon \
	-lstlplus \
	-lvlsift \
	-leasyexif \
	-lboost_date_time \
	-lboost_random \
	-lboost_system \
	-lsioclient \
	-lsqlite3

$(obj).target/addon.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/addon.node: LIBS := $(LIBS)
$(obj).target/addon.node: TOOLSET := $(TOOLSET)
$(obj).target/addon.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/addon.node
# Add target alias
.PHONY: addon
addon: $(builddir)/addon.node

# Copy this to the executable output path.
$(builddir)/addon.node: TOOLSET := $(TOOLSET)
$(builddir)/addon.node: $(obj).target/addon.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/addon.node
# Short alias for building this executable.
.PHONY: addon.node
addon.node: $(obj).target/addon.node $(builddir)/addon.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/addon.node

