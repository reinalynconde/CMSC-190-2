import { Response } from '@angular/http';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { OrigamiService } from '../services/origami.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
// import { ViewChild } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';

import OrigamiInput from '../models/origami.model';
import UploadedImage from '../models/uploaded-image.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  animations: [
    trigger('imageState', [
      state('inactive', style({
        opacity: 1
      })),
      state('active',   style({
        opacity: 0
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class InputComponent implements OnInit {
  input_page = true;
  not_upload = true;
  dim_for_load = false;
  dim_for_add = false;
  focal_length;
  sensor_size;
  button_label = "Upload";
  filesToUpload = [];
  files = [];

  public in: OrigamiInput = new OrigamiInput();
  public uploaded: Array<UploadedImage> = [];

  constructor(private origamiService: OrigamiService, private router: Router) {
    localStorage.setItem('home', '/input');    
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

  removeImage() {
    // console.log(this);
  }

  fileChangeEvent(fileInput: any){
    console.log("Detected change!");
    this.dim_for_add = true;

    this.filesToUpload = <Array<File>> fileInput.target.files;

    if (!(File && FileList && FileReader)) {
      var spann = document.createElement("span");
      spann.setAttribute("value", "Sorry, your browser does not support File API")
    }

    var len = this.filesToUpload.length;
    console.log(len);
    for(var j = 0; j < len; j++) {
      this.origamiService.readURL(len, this.filesToUpload[j], this.uploaded)
        .then((res) => {
          console.log(res);
          if(res == false){
            this.dim_for_add = false;

            for(var i = 0; i < this.uploaded.length; i++) {
              if(this.files.indexOf(this.uploaded[i].file) === -1)
                this.files.push(this.uploaded[i].file);
            }
            console.log("u = " + this.uploaded.length);
            console.log("f = " + this.files.length);

            document.getElementById("up").removeAttribute("disabled");
            document.getElementById("can").removeAttribute("disabled");
          }
          console.log(this.dim_for_add);
        }, (err) => {
          console.log(err);
        });
    }
  }

  upload() {
    this.dim_for_load = true;

    var date = new Date();
    var id = "" + date.getMonth() + date.getDate() + date.getFullYear()
          + date.getHours() + date.getMinutes() + date.getSeconds()
          + date.getMilliseconds();
    localStorage.setItem('now', id);

    this.in.focal_length = this.focal_length;
    this.in.sensor_size = this.sensor_size;
    this.in.id = localStorage.getItem('now');

    this.origamiService.addData(this.in)
      .subscribe((res) => {
        console.log("Data successfully added!");

        var len = this.uploaded.length;

        if(len > 16) len = 16;

        for(var x = 0; x < len; x++) {
          localStorage.setItem(x + '', this.uploaded[x].name + '');
        }
        console.log("here");
        this.origamiService.makeFileRequest(this.getUploadUrl(), [this.in.id + ''],
          this.files)
          .then((err) => {
            console.log(err);
            this.dim_for_load = false;
            console.log(":(");
          }, (res) => {
            console.log(res);
            this.input_page = false;
            this.dim_for_load = false;
            console.log(this.dim_for_load);
            this.router.navigateByUrl('/processing');
          });
      });
    
  }

  removeOne(img) {
    var index: number = this.uploaded.indexOf(img);
    var index2: number = this.files.indexOf(img.file);
    if (index !== -1 && index2 !== -1) {
      this.uploaded.splice(index, 1);
      this.files.splice(index2, 1);
    }

    console.log("u = " + this.uploaded.length);
    console.log("f = " + this.files.length);
  }

  removeAll() {
    document.getElementById("up").setAttribute("disabled", "disabled");
    document.getElementById("can").setAttribute("disabled", "disabled");

    var parent = document.getElementById("parent");
    var div = document.getElementById("images");
    parent.removeChild(div);

    var neww = document.createElement("img");
    neww.setAttribute("class", "ui small images");
    neww.setAttribute("id", "images");

    parent.appendChild(neww);
    this.filesToUpload = [];
    this.uploaded = [];
    this.files = [];
  }

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    document.getElementById("up").setAttribute("disabled", "disabled");
    document.getElementById("can").setAttribute("disabled", "disabled");
  }

}
