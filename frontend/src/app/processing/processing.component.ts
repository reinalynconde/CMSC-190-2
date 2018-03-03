import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  add_mesh_value = 0;
  add_mesh = "Mesh not done yet.";
  dim_for_load = false;

  constructor(private router: Router) { }

  start_load() {
    this.dim_for_load = true;
    setTimeout(() => this.router.navigateByUrl('/model'), 2000);
  }

  add(num): void {
    if(this.add_mesh_value < 100){
      this.add_mesh_value += num;
      this.add_mesh = "Adding mesh...";

      if(this.add_mesh_value >= 100)
        this.add_mesh = "Mesh done.";
    }else {
      this.add_mesh_value = 100;
      this.add_mesh = "Mesh done.";
      this.start_load();
    }
  }

  subtract(num): void {
    if(this.add_mesh_value > 0){
      this.add_mesh_value -= num;
      this.add_mesh = "Adding mesh...";
    }else
      this.add_mesh_value = 0;
      this.add_mesh = "Adding mesh...";
  }

  ngOnInit() {
  }

}
