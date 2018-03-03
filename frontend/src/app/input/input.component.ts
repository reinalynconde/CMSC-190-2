import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { OrigamiService } from '../services/origami.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';

import OrigamiInput from '../models/origami.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input_page = true;
  focal_length;
  sensor_size;
  not_upload = true;
  button_label = "Upload";

  public in: OrigamiInput = new OrigamiInput();

  constructor(private origamiService: OrigamiService, private router: Router) { }


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

  upload(uploaded_files) {    
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
  }

  ngOnInit() {

  }

}
