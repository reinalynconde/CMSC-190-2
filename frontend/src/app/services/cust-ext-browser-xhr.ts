import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";

@Injectable()
/**
 * author AhsanAyaz
 * We're extending the BrowserXhr to support CORS
 * https://medium.com/@ahsan.ayaz/how-to-handle-cors-in-an-angular2-and-node-express-applications-eb3de412abef
 */
export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;             // this is all the magic we need for now
    return <any>(xhr);
  }
}