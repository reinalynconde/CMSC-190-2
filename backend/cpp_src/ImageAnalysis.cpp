#include "opencv2/core.hpp"
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"

#include "openMVG/image/image_io.hpp"
#include "openMVG/exif/exif_IO_EasyExif.hpp"
#include "openMVG/cameras/Camera_Common.hpp"
#include "openMVG/cameras/Camera_Pinhole.hpp"
#include "openMVG/cameras/cameras.hpp"

#include "third_party/stlplus3/filesystemSimplified/file_system.hpp"

#include <cstdlib>
#include <fstream>
#include <iostream>
#include <memory>
#include <string>
#include <utility>
#include <node.h>

using namespace cv;
using namespace std;
using namespace v8;

int checkFolders(string input, string output) {
  if (!stlplus::folder_exists(input)) {
      cerr << "\nThe input directory does not exist" << endl;
      return EXIT_FAILURE;
  }

  if (output.empty()) {
      cerr << "\nInvalid output directory" << endl;
      return EXIT_FAILURE;
  }

  if (!stlplus::folder_exists(output)) {
    cout << "Output directory does not exist. Will try to create now..."
      << endl;
    if (!stlplus::folder_create(output)) {
        cerr << "\nCannot create output directory" << endl;
        return EXIT_FAILURE;
    }
  }

  return EXIT_SUCCESS;
}

void analyze(const FunctionCallbackInfo<Value>& args) {
  //process input arguments
  Isolate* isolate = args.GetIsolate();

  if (args.Length() < 4) {
    // Throw an Error that is passed back to JavaScript
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  string inputDir(* v8::String::Utf8Value(args[0]->ToString()));
  string outputDir(* v8::String::Utf8Value(args[1]->ToString()));
  double sensorSize = args[2] -> NumberValue();
  double focalLength = args[3] -> NumberValue();

  //check validity of folders
  int areFoldersValid = checkFolders(inputDir, outputDir);

  if(areFoldersValid == EXIT_FAILURE)
    return;

  //get images
  vector<string> images = stlplus::folder_files(inputDir);
  sort(images.begin(), images.end());

  // double width, height, ppx, ppy, focal;

  cout << "HIIII " << images.size() << endl;  
  ostringstream error_report_stream;
  for(vector<string>::const_iterator
    iter_image = images.begin();
    iter_image != images.end(); iter_image++) {

    const string fullFilename = stlplus::create_filespec(inputDir, 
      *iter_image);
    const string filenamePart = stlplus::filename_part(fullFilename);

    //check validity of image format
    if(openMVG::image::GetFormat(fullFilename.c_str()) == 
      openMVG::image::Unknown) {
      error_report_stream << filenamePart << ": Unkown image file format." 
        << "\n";
      continue;
    }

    //read image header
    openMVG::image::ImageHeader imgHeader;

    if(!openMVG::image::ReadImageHeader(fullFilename.c_str(), &imgHeader))
      continue;

    //parse EXIF data of the image
    unique_ptr<openMVG::exif::Exif_IO>
      exifReader(new openMVG::exif::Exif_IO_EasyExif);
    exifReader->open(fullFilename);

    const bool hasValidExifMetadata = exifReader->doesHaveExifInfo()
      && !exifReader->getModel().empty();

    float exif_focal = exifReader->getFocal();
    // focal = max(width, height) * exif_focal / sensorSize;

    //read image
    cout << "Reading image: " << fullFilename << "..." << endl;
    Mat image = imread(fullFilename, CV_LOAD_IMAGE_COLOR);

    if(image.empty()) {
        cerr << "Image is empty." << endl;
        return;
    }
    cout << "a" << endl;
    vector<Mat> channels;
    cout << "a" << endl;
    Mat conv(image);
    cout << "a" << endl;
    Mat output(image);
    cout << "a" << endl;
    cvtColor(image, conv, COLOR_BGR2Lab);
    cout << "b" << endl;
    split(conv, channels);

    cout << "Applying CLAHE..." << endl;
    Ptr<CLAHE> clahe = createCLAHE(2.0, Size(8,8));
    cout << "c" << endl;
    clahe->apply(channels[0], channels[0]);
    cout << "d" << endl;
    merge(channels, conv);
    cout << "e" << endl;
    cvtColor(conv, conv, COLOR_Lab2BGR);

    cout << "Applying bilateral filter..." << endl;
    //bilateral filter is used to remove unwanted noise while preserving edges
    bilateralFilter(conv, output, 5, 50.0, 50.0, BORDER_DEFAULT);
    cout << "f" << endl;

    cout << "Writing image: " << outputDir << "/" << *iter_image << "...\n" << endl;
    imwrite(outputDir + "/" + *iter_image, output);
    cout << "g" << endl;
  }
  
  return;
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "analyze", analyze);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)