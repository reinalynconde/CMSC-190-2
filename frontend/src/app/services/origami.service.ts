import OrigamiInput from '../models/origami.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class OrigamiService {
  api_url = 'http://localhost:8080';
  origami_url = `${this.api_url}/api/origami`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.origami_url;
  }

  getOrigami(): Observable<OrigamiInput> {
    return this.http.get(this.origami_url)
      .map(res => {
        console.log(res["data"]);
        return res["data"].docs as OrigamiInput;
      })
  }

  addData(input: OrigamiInput): Observable<any> {
    //returns the observable of http post request
    console.log("at"+ input.id +": " + input.focal_length + " " + input.sensor_size);
    return this.http.post(`${this.origami_url}/add`, input);
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      console.log("hi: " + params[0])
      
      for(var i = 0; i < files.length; i++) {
        formData.append("uploads", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
           resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  readURL(len:number, file: File, imeg, div) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function(e:any) {

        imeg = document.createElement("img");
        imeg.setAttribute("class", "ui image");
        imeg.setAttribute("src", e.target.result);
        imeg.setAttribute("alt", file.name);

        div.appendChild(imeg);
        console.log(div.childNodes.length + " hi " + len);
        if(div.childNodes.length >= len)
          return resolve(false);
        else          
          return reject(true);
      }

      reader.readAsDataURL(file);
    });
  }

  upload(uploaded_files: File[]) {
    console.log("@ origami.service.ts");
    console.log(uploaded_files);
    return this.http.post(`${this.origami_url}` + '/upload', uploaded_files);
  }

  process(): Observable<any> {
    console.log("p@ origami.service.ts");
    return this.http.post(`${this.origami_url}` + '/process', []);
    /* return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      var formData: any = new FormData();

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
           resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      
      xhr.open("POST", url, true);
      xhr.send(formData);
    }); */
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
