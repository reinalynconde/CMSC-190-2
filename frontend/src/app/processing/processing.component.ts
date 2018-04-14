import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { OrigamiService } from '../services/origami.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  dim_for_load = false;
  image_analysis = "No progress yet.";
  feature_extraction = "No progress yet.";
  matching = "No progress yet.";
  reconstruction = "No progress yet.";
  mesh = "No progress yet.";
  ia_val = 0;
  fe_val = 0;
  m_val = 0;
  r_val = 0;
  me_val = 0;

  constructor(private origamiService: OrigamiService, private router: Router) {
    // this.commence();
    /* var p = 10;
    while(p > 0) {
      console.log("Processing...");
      this.process();
      --p;
    } */
    // this.origamiService.check();

    /* while (!this.all_done) {
      setTimeout(() => {
        if(this.ia_val < 100)
          this.ia_val+=10;
        else if(this.fe_val < 100)
          this.fe_val+=10;
        else if(this.m_val < 100)
          this.m_val+=10;
        else if(this.r_val < 100)
          this.r_val+=10;
        else if(this.me_val < 100)
          this.me_val+=10;
      }, 5000);

      if(this.me_val >= 100)
        this.all_done = true;
    } */
  }

  commence(): any {
    this.origamiService.commence()
      .subscribe(res => {
        console.log(res.data);
        if(res.data == "ok")
          this.sendMessage();
      })
  }

  process(): any {
    this.origamiService.process()
      .subscribe(res => {
        console.log(res.data);
        return res.data;
      })
      /* .then((err) => {
        console.log(err);
      }, (res) => {
        console.log(res);
      }); */
  }

  start_load() {
    this.dim_for_load = true;
    setTimeout(() => this.router.navigateByUrl('/model'), 2000);
  }

  ngOnInit() {
    /* this.origamiService.messages.subscribe(msg => {
      console.log(msg);
    }) */
    var i;
    for(i = 0; i <= 100; i+=10) {
      setTimeout(() => this.ia_val = i, 5000);
    }

    for(i = 0; i <= 100; i+=10) {
      setTimeout(() => this.fe_val = i, 5000);
    }

    for(i = 0; i <= 100; i+=10) {
      setTimeout(() => this.m_val = i, 5000);
    }

    for(i = 0; i <= 100; i+=10) {
      setTimeout(() => this.r_val = i, 5000);
    }

    for(i = 0; i <= 100; i+=10) {
      setTimeout(() => this.me_val = i, 5000);

      if(this.me_val >= 100)
        this.start_load();
    }
    
  }

  sendMessage() {
    this.origamiService.sendMsg(localStorage.getItem('now'));
  }

}
