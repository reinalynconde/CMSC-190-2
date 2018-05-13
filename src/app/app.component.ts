import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { OrigamiService } from "./services/origami.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home: Boolean;
  samp: Boolean;
  abt: Boolean;
  contact: Boolean;
  notHome: Boolean;

  constructor(private router: Router, private socialAuthService: AuthService, private origamiService: OrigamiService) {
    localStorage.setItem('home', '/home');
    this.set_home();

  }

  set_home() {
    this.router.navigateByUrl(localStorage.getItem('home'));
    if(localStorage.getItem('home') != '/home')
      this.notHome = true;
    else this.notHome = false;

    this.home = true;
    this.samp = false;
    this.abt = false;
    this.contact = false;
  }

  set_samp() {
    this.router.navigateByUrl('/sample1')
    this.notHome = false;
    this.samp = true;
    this.home = false;
    this.abt = false;
    this.contact = false;
  }

  set_abt() {
    this.router.navigateByUrl('/about')
    this.notHome = false;
    this.abt = true;
    this.samp = false;
    this.home = false;
    this.contact = false;
  }

  set_contact() {
    this.router.navigateByUrl('/contact')
    this.notHome = false;
    this.contact = true;
    this.samp = false;
    this.abt = false;
    this.home = false;
  }

  signOut() {
    this.socialAuthService.signOut();
    this.origamiService.sendMsg("signout");
    this.router.navigateByUrl('/home');
  }

  title = 'app';
}
