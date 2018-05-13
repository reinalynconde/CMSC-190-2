import OrigamiInput from '../models/origami.model';
import { Observable, Subject } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

import 'rxjs/add/operator/map';

import UploadedImage from '../models/uploaded-image.model'

@Injectable()
export class OrigamiService {
  api_url = 'http://18.236.181.139:80';
  origami_url = `${this.api_url}/api/origami`;
  messages: Subject<any>;
  id: String

  constructor(private http: HttpClient, private ws: WebSocketService, private httplang: Http) {
    this.messages = <Subject<any>>ws
      .connect()
      .map((res: any): any => {
        console.log(res);
        return res;
      })
  }

  sendMsg(msg) {
    console.log("ah pota");
    this.messages.next(msg);
    this.id = msg;
  }

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

  getModel(id, token) {
    let header = new HttpHeaders({
      'Content-Type': 'application/octet-stream'
    });
    return this.http.get(`${this.origami_url}/get_model/${id}`, {'headers': header})
      .map((res) => console.log(res));
  }

  downloadFile(id_: String) {
    var body = {id: id_};

    return this.http.post(`${this.origami_url}/get_model`, body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
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
      
      formData.append("uploads", files[0], params[0]);
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

  readURL(len:number, file: File, uploaded: Array<UploadedImage>) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function(e:any) {

        var ima:UploadedImage = new UploadedImage();
        ima.data = e.target.result;
        ima.name = file.name;
        ima.file = file;
        uploaded.push(ima);
        if(uploaded.length >= len)
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
    return this.http.post(`${this.origami_url}/upload`, uploaded_files);
  }

  commence(): Observable<any> {
    console.log("Trying to run...");
    return this.http.post(`${this.origami_url}/commence`, []);
  }

  process(): Observable<any> {
    console.log("p@ origami.service.ts");
    return this.http.post(`${this.origami_url}/process`, []);
  }

  sendToRestApiMethod(token: string, email: string, id: string): any {
    return this.http.post(`${this.origami_url}/signin`, {'token': token, 'id': id, 'email': email});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
