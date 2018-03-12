// Accessing the Service that we just created

var OrigamiService = require('../services/origami.service');
var fs = require('fs');

// Saving the context of this module inside the _the variable

_this = this;


// Async Controller function to get the To do List

exports.getOrigami = function(req, res, next){

  try {
  
    var dataa = OrigamiService.getOrigami()
    
    // Return the todos list with the appropriate HTTP Status Code and Message.
    
    return res.status(200).json({status: 200, data: dataa, message: "Succesfully recieved data"});
      
  } catch (e) {
      
//Return an Error Response Message with Code and the Error Message.
      
   return res.status(400).json({status: 400, message: e.message});
      
  }
}

exports.addData = function(req, res, next){
  try {
    var received = OrigamiService.addData(req.body);
    console.log("controller: " + received.sensor_size);

    var show = received.focal_length + " " + received.sensor_size;
    
    return res.status(201).json({status: 201, data: show, message: "Succesfully added data"});      
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.upload = function(req, res, next) {
  try {
    var files = req.files;

    for(var i = 0; i < files.length; i++) {
      var image = files[i];

      fs.rename(image.path, "uploads/" + image.originalname, function(err) {
        if (err) res.status(400).json({status: 400, message: "Upload failed"});
      });
    }

    res.status(201).json({status: 201, message: "Succesfully uploaded image"});
  } catch (e) {      
    return res.status(400).json({status: 400, message: e.message});
  }
}