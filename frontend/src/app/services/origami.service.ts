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
    console.log("at origami.service.ts: " + input.focal_length + " " + input.sensor_size);
    return this.http.post(`${this.origami_url}/add`, input);
  }

  upload(uploaded_files: any[]) {
    console.log("@ origami.service.ts");
    return this.http.post(`${this.origami_url}` + '/upload', uploaded_files);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
