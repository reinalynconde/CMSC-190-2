// Gettign the Newly created Mongoose Model we just created 
var Origami = require('../models/origami.model');
var fs = require('fs');

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the To do List
exports.getOrigami = function(){
    
    // Try Catch the awaited promise to handle the error 
    
  try {

    var data = {
      focal_length: 1,
      sensor_size: 2
    };
    
    // Return the todod list that was retured by the mongoose promise
    return data;

  } catch (e) {

    // return a Error message describing the reason 
    throw Error('Error while fetching data');
  }
}

exports.addData = function(data) {

  console.log(data);

  var focal_length = data.focal_length;
  var sensor_size = data.sensor_size;
  var id = data.id;

  console.log("data: " + focal_length + " " + sensor_size);

  try {
    var comb = {
      focal_length,
      sensor_size,
      id
    }

    console.log("service: " + comb.focal_length);

    return comb;
  } catch (e) {
    throw Error("Error while adding data");
  }
}

exports.upload = function(data) {
  console.log("@ origami.service.js")

  try {
    return data;
  } catch (e) {
    throw Error("Error while uploading");
  }
}