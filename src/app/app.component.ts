import { Response } from '@angular/http';
import { OrigamiService } from './services/origami.service';
import OrigamiInput from './models/origami.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private origamiService: OrigamiService) {}

  title = 'app';

  public newOrigami: OrigamiInput = new OrigamiInput() 
  
  origamiList: OrigamiInput[];

  ngOnInit() {
    
  }
}
