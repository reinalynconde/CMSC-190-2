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
  progress = "";

  constructor(private origamiService: OrigamiService, private router: Router) {
    this.sendMessage();
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
          // this.sendMessage();
          console.log("ayyy");
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
    // this.start_load();
    this.origamiService.messages.subscribe(msg => {
      console.log(msg);

      if(msg.step == 1) {
        this.image_analysis = "Image analysis: " + msg.progress;
        this.ia_val = msg.percent;

        if(this.ia_val == 100) {
          this.image_analysis = "Image analysis done!";
          this.feature_extraction = "Extracting features: Starting...";
          this.fe_val = 2;
        }
      }

      if(msg.step == 2) {
        this.image_analysis = "Image analysis done!";
        this.ia_val = 100;
        this.feature_extraction = "Extracting features: " + msg.progress;

        if(this.fe_val < msg.percent)
          this.fe_val = msg.percent;
      }

      if(msg.step == 3) {
        this.feature_extraction = "Extracting features done!";
        this.fe_val = 100;
        this.matching = "Matching features: " + msg.progress;
        this.m_val = msg.percent;
      }

      if(msg.step == 4) {
        if(msg.percent == 100) {
          this.image_analysis = "Image analysis done!";
          this.ia_val = 100;
          this.feature_extraction = "Extracting features done!";
          this.fe_val = 100;
          this.matching = "Matching features done!";
          this.m_val = 100;
          this.reconstruction = "Reconstructing Sparse Point Cloud done!";
          this.r_val = 100;
          
          console.log("heeey");
          this.start_load();
        } else {
          this.matching = "Matching features done!";
          this.m_val = 100;
          this.reconstruction = "Reconstructing Sparse Point Cloud: " + msg.progress;
          this.r_val = msg.percent;
        }
      }

    }) 
    
  }

  sendMessage() {
    "AGAAAIN"
    this.origamiService.sendMsg(localStorage.getItem('now'));
  }

}
