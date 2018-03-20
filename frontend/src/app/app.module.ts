import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
// import { Editor3DModule } from 'ng2-3d-editor';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './/app-routing.module';

import { InputService } from './input.service';

import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { InputComponent } from './input/input.component';
import { ProcessingComponent } from './processing/processing.component';
import { ModelComponent } from './model/model.component';
import { OrigamiService } from './services/origami.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    InputComponent,
    ProcessingComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SuiModule,
    AppRoutingModule,
    FormsModule//,
    // Editor3DModule
  ],
  providers: [HttpClientModule, InputService, OrigamiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
platformBrowserDynamic().bootstrapModule(AppModule);
