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
  focal_length: Number;
  sensor_size: Number;
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

  addData(focal_length, sensor_size): void {
    console.log("at input.component.ts " + this.in);
    this.in.focal_length = focal_length;
    this.in.sensor_size = sensor_size;

    this.origamiService.addData(this.in)
      .subscribe((res) => {
        console.log("Data successfully added!");
      })
  }

  button_click(): void {
    if(this.button_label == "Upload") {
      this.not_upload = false;
      this.button_label = "Save";
    } else {
      this.addData(this.focal_length, this.sensor_size);
      this.input_page = false;
      this.router.navigateByUrl('/processing');
    }
  }

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
    this.addData(this.focal_length, this.sensor_size);
    
    this.origamiService.makeFileRequest(this.getUploadUrl(), [], this.filesToUpload)
      .then((err) => {
        console.log(err);
      }, (res) => {
        console.log(res);
        this.input_page = false;
        this.dim_for_load = false;
        console.log(this.dim_for_load);
        this.router.navigateByUrl('/processing');
      });
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

  /*upload(uploaded_files) {
    console.log(uploaded_files);
    this.origamiService.upload(uploaded_files)
      .subscribe((res) => {
        console.log("Files uploaded");
      })
  }

  onUpload(event) {
      console.log(event.files);
  
      this.addData(this.focal_length, this.sensor_size);
      this.upload(event.files);
      this.input_page = false;
      this.router.navigateByUrl('/processing');
  }*/

  ngOnInit() {

  }

}
