import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LandComponent } from './land/land.component';
import { InputComponent } from './input/input.component';
import { ProcessingComponent } from './processing/processing.component';
import { ModelComponent } from './model/model.component';
import { SampleComponent } from './sample/sample.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: LandComponent },
  { path: 'input', component: InputComponent },
  { path: 'processing', component: ProcessingComponent },
  { path: 'model', component: ModelComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'sample1', component: Sample1Component },
  { path: 'sample2', component: Sample2Component },
  { path: 'sample3', component: Sample3Component },
  { path: 'about', component: AboutComponent },
  { path: '**', component: LandComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
