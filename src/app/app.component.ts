import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
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
    this.router.navigateByUrl('/sample')
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

  title = 'app';
}
