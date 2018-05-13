var OrigamiService = require('../services/origami.service');
var fs = require('fs');
const delay = require('delay');
const stream = require('stream');
const sqlite3 = require('sqlite3').verbose();
const worker = require("streaming-worker");
const through = require('through');
const path = require("path");
const addon = path.join(__dirname, '../build/Release/addon');

_this = this;
_user = "none";
_running = false;
_progress = "none";

exports.getOrigami = function(req, res, next){
  try {
    var dataa = OrigamiService.getOrigami();
    
    return res.status(200).json({status: 200, data: dataa,
      message: "Succesfully recieved data"});
      
  } catch (e) {      
   return res.status(400).json({status: 400, message: e.message});
  }
}

exports.addData = function(req, res, next){
  try {
    var received = OrigamiService.addData(req.body);
    console.log("AAAAAAAAA: " + received.id);
    _user = received.id;

    var show = received.focal_length + " " + received.sensor_size;
    
    return res.status(201).json({status: 201, data: show,
      message: "Succesfully added data"});      
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.upload = function(req, res, next) {
  try {
    var files = req.files;
    var user = files[0].originalname;
    var dir = user;

    /*var db = new sqlite3.Database('db/origami.db', sqlite3.OPEN_READWRITE,
      (err) => {
        if(err) {
          return console.log("Error has occured!\n" + err.message);
        }

        console.log("Connected to the database");
    });


    db.get(`SELECT user FROM progress WHERE email = ?`, [user], (err, row) => {
      if (err) {
          db.close();
          return console.error(err.message);
      }
      if(row){
          console.log(row);
          dir = row.user;
          db.close();*/
          var folder = "uploads/" + dir;
          console.log("folder = " + folder);

        try {
          fs.mkdirSync(folder);
        } catch(e) {
          if (e.code == 'EEXIST') console.log(e);
        }

       for(var i = 1; i < files.length; i++) {
        var image = files[i];

        fs.rename(image.path, folder + "/" + image.originalname, function(err) {
           if (err) return console.log("Upload failed");
          });
        }

        res.status(201).json({status: 201, message: "Succesfully uploaded images"});
      //}
    //});

  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.getModel = function(req, res, next) {
  try {
    var user = req.body.id;
    console.log("DDDD" + user);

    var filePath = path.join(__dirname, '../uploads/' + user + '/output/mesh.obj');
    res.sendFile(filePath);

  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.signin = function(req, res, next) {
  try{
    var msg = '';
    var email = req.body.email;
    /*var db = new sqlite3.Database('db/origami.db', sqlite3.OPEN_READWRITE,
      (err) => {
        if(err) {
          return console.log("Error has occured!\n" + err.message);
        }

        console.log("Connected to the database");
    });

    db.get(`SELECT * FROM progress WHERE email = ?`, [email], (err, row) => {
       if (err) {
          db.close();
          return console.error(err.message);
       }

       if(!row) {
         db.run(`INSERT INTO progress(user, email) VALUES (?, ?)`, [req.body.id, email],
         function(err) {
           if(err) {
             db.close();
             return console.log(err.message);
           }

           console.log('User has been added!');
         });
       } else {
         if(row.progress != "done" && row.step > 0 && row.step < 6)
           msg = 'ongoing'
         else if(row.progress == "done") {
           db.run(`UPDATE progress SET user = ?, step = '0' WHERE email = ?`, [req.body.id, email], function(err) {
             if(err) return console.log(err.message);
             console.log('Row reset');
           })
         } else msg = row.progress;
       }
    });

    db.close();*/

    return res.status(201).json({status: 201, message: msg});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.commence = function(req, res, next) {
  try {
    var ind = "uploads/" + _user + "/";
    var out = ind + "output";

    console.log("COMMENCE!!!");
    //basic C++ run:
    const commence = worker(addon, {
      "inputDir": ind,
      "outputDir": out,
      "user": _user
    });

    commence.from.on('progress', function(sample){
      console.log("----------- Event -----------");
      console.log(JSON.parse(sample));
      console.log("-----------------------------");
    });

    /*addon.commence(folder + "/", folder + "/output", _user, function(res) {
      console.log("done!")
    });*/

    res.status(200).json({status: 201, data: "ok", message: "Running..."});

  } catch(e) {
    return res.status(400).json({status: 400, data: "no", message: e.message});
  }
}

/* exports.event = function(req, res, next) {
  try {
    var channel = new stream.PassThrough

    var interval = setInterval(function() {
        channel.write("data: " + Math.floor((Math.random() * 100) + 1) + "\n\n");
        console.log("write data...");
    }, 2000);

    console.log("BBBBBBB");

    request.raw.req.on("close", function() {
        console.error("oops listener closed");
        clearInterval(interval);
    });
    console.log("CCCCC");

    request.raw.res.writeHead(200, {
        'content-type': 'text/event-stream; charset=utf-8',
        'connection': 'keep-alive',
        'cache-control': 'no-cache',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    console.log("BBBBBBB");

    channel.pipe(request.raw.res);

  } catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
} */

exports.process = function(req, res, next) {
  try {
    console.log("eeep");

  } catch (e) {
    return res.status(500).json({status: 500, message: e.message});
  }
}

exports.get_model = function(req, res, next) {
  try {
    var user = req.body;
    
    var folder = "uploads/" + user + "/output";
    console.log("folder = " + folder);

    fs.exists(folder + "/mesh.obj", (exists) => {
      if (exists){
        //return res.status(200).json({status: 200, data: folder + "/model_mesh.obj",
          //message: "Succesfully sent model"});
        res.download(folder, 'mesh.obj');
      } else {
        // res.sendFile(config.repoLogos+'/logodefault.png');
        return res.status(404).json({status: 404, message: "Model not found"});
      }
    });


  } catch (e) {
    return res.status(500).json({status: 500, message: e.message});
  }
}


exports.event = function(req, res, next) {
  console.log("HUY")
  const client = SSE(req, res, {
    padding: true,
    ping: 10000
  });
  
  client.send("Hello world!");
  client.onClose(() => console.log("Bye client!"));
}

