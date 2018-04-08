// Accessing the Service that we just created

var OrigamiService = require('../services/origami.service');
var fs = require('fs');
const delay = require('delay');
const addon = require('../build/Release/addon');
const sqlite3 = require('sqlite3').verbose();

// Saving the context of this module inside the _the variable

_this = this;
_user = "none";
_running = false;
_progress = "none";


// Async Controller function to get the To do List

exports.getOrigami = function(req, res, next){

  try {
  
    var dataa = OrigamiService.getOrigami()
    
    // Return the todos list with the appropriate HTTP Status Code and Message.
    
    return res.status(200).json({status: 200, data: dataa,
      message: "Succesfully recieved data"});
      
  } catch (e) {
      
//Return an Error Response Message with Code and the Error Message.
      
   return res.status(400).json({status: 400, message: e.message});
      
  }
}

exports.addData = function(req, res, next){
  try {
    var received = OrigamiService.addData(req.body);
    console.log("AAAAAAAAA: " + received.id);
    _user = received.id;

    var show = received.focal_length + " " + received.sensor_size;

    //create record for this user
    var db = new sqlite3.Database('db/origami.db', sqlite3.OPEN_READWRITE,
    (err) => {
        
      if(err) {
        return console.log("Error has occured!\n" + err.message);
      }

      console.log("Connected to the database");
    });

    db.run(`INSERT INTO users(UserId, Progress) VALUES(?, ?)`, [received.id, "empty"], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log('A row has been inserted.');
    });

    db.close((err) => {
      if(err) {
        return console.error(err.message);
      }

      console.log("Database connection successfully closed.");
    });
    
    return res.status(201).json({status: 201, data: show,
      message: "Succesfully added data"});      
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.upload = function(req, res, next) {
  try {
    var files = req.files;
    var folder = "uploads/" + _user;
    console.log("folder = " + folder);

    try {
      fs.mkdirSync(folder);
    } catch(e) {
      if (e.code == 'EEXIST') console.log(e);
    }

    for(var i = 0; i < files.length; i++) {
      var image = files[i];

      fs.rename(image.path, folder + "/" + image.originalname, function(err) {
        if (err) res.status(400).json({status: 400, message: "Upload failed"});
      });
    }

    console.log("folder is " + folder);
    console.log("COMMENCE!!!");
    //basic C++ run:
    const addon = require("../build/Release/addon");

    addon.commence(folder + "/", folder + "/output", _user, function(res) {
      console.log("done!")
    });

    res.status(201).json({status: 201, message: "Succesfully uploaded images"});
  } catch (e) {      
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.process = function(req, res, next) {
  try {
    delay(3000)
    .then(() => {
        // Executed after 3000 milliseconds 
        var db = new sqlite3.Database('db/origami.db', sqlite3.OPEN_READWRITE,
        (err) => {
            
          if(err) {
            return console.log("Error has occured!\n" + err.message);
          }
    
          console.log("Connected to the databaseP");
        });
    
        db.serialize(() => {
          db.get('SELECT Progress as progress FROM users WHERE UserId = ?;',
          _user, (err, row) => {
            if (err) {
              console.error(err.message);
            }
            _progress = row.progress;
            console.log("@controller:" + _progress);
    
            db.close((err) => {
              if(err) {
                return console.error(err.message);
              }
        
              console.log("Database connection successfully closedP.");
              return res.status(201).json({status: 201, data: _progress,
                message: "Processing..."});
            });
    
          });
        });
        
    });


    /* db.close((err) => {
      if(err) {
        return console.error(err.message);
      }

      console.log("Database connection successfully closedP.");
    }); */

    /* return res.status(201).json({status: 201, data: _progress,
      message: "Processing..."});   */ 

  } catch (e) {
    return res.status(500).json({status: 500, message: e.message});
  }
}