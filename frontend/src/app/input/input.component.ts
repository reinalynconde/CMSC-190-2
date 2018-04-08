import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { OrigamiService } from '../services/origami.service';
import { Router } from '@angular/router';
// import { ViewChild } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';

import OrigamiInput from '../models/origami.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input_page: Boolean;
  not_upload: Boolean;
  dim_for_load: Boolean;
  dim_for_add: Boolean;
  focal_length: number;
  sensor_size: number;
  button_label: String;
  filesToUpload: Array<File>;

  public in: OrigamiInput = new OrigamiInput();

  constructor(private origamiService: OrigamiService, private router: Router) {
    this.input_page = true;
    this.not_upload = true;
    this.dim_for_load = false;
    this.dim_for_add = false;
    this.focal_length;
    this.sensor_size;
    this.button_label = "Upload";
    this.filesToUpload = [];
  }


  getUploadUrl() {
    return (this.origamiService.getUrl() + "/upload");
  } 

  getData(): void {
    this.origamiService.getOrigami()
      .subscribe(data => {
        this.focal_length = data.focal_length;
        this.sensor_size = data.sensor_size;
      })
  }

/*   addData(focal_length, sensor_size, id): void {
    console.log("at input.component.ts " + this.in);
    this.in.focal_length = focal_length;
    this.in.sensor_size = sensor_size;
    this.in.id = id;

    this.origamiService.addData(this.in)
      .subscribe((res) => {
        console.log("Data successfully added!");
      })
  } */

  removeImage() {
    // console.log(this);
  }

  fileChangeEvent(fileInput: any){
    this.dim_for_add = true;

    if(this.filesToUpload.length > 0) {
      for(var k = 0; k < this.filesToUpload.length; k++) {
        this.filesToUpload[this.filesToUpload.length + k] = fileInput.target.files[k];
      }
    } else
      this.filesToUpload = <Array<File>> fileInput.target.files;

    var div = document.getElementById("images");
    var imeg;
    var wrap;
    var close;
    var icon;
    var reader;

    if (!(File && FileList && FileReader)) {
      var spann = document.createElement("span");
      spann.setAttribute("value", "Sorry, your browser does not support File API")
    }

    var len = this.filesToUpload.length;
    for(var j = 0; j < len; j++) {
      this.origamiService.readURL(len, this.filesToUpload[j], imeg, div)
        .then((res) => {
          console.log(res);
          if(res == false)
            this.dim_for_add = false;
          console.log(this.dim_for_add);
        }, (err) => {
          console.log(err);
        });
    }
  }

  upload() {
    this.dim_for_load = true;
    var date = new Date();
    var id = "id:" + date.getMonth() + date.getDate() + date.getFullYear()
      + date.getHours() + date.getMinutes() + date.getSeconds()
      + date.getMilliseconds();

    localStorage.setItem('now', id);
    console.log("at input.component.ts " + this.in);
    this.in.focal_length = this.focal_length;
    this.in.sensor_size = this.sensor_size;
    this.in.id = id;

    this.origamiService.addData(this.in)
      .subscribe((res) => {
        console.log("Data successfully added!");
        
        this.origamiService.makeFileRequest(this.getUploadUrl(), [id], this.filesToUpload)
          .then((err) => {
            console.log(err);
          }, (res) => {
            console.log(res);
            this.input_page = false;
            this.dim_for_load = false;
            console.log(this.dim_for_load);
            this.router.navigateByUrl('/processing');
          });
      })
    
  }

  removeAll() {
    var parent = document.getElementById("parent");
    var div = document.getElementById("images");
    parent.removeChild(div);

    var neww = document.createElement("img");
    neww.setAttribute("class", "ui small images");
    neww.setAttribute("id", "images");

    parent.appendChild(neww);
    this.filesToUpload = [];
  }

  ngOnInit() {

  }

}
