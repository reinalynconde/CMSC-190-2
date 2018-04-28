import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LandComponent } from './land/land.component';
import { InputComponent } from './input/input.component';
import { ProcessingComponent } from './processing/processing.component';
import { ModelComponent } from './model/model.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: LandComponent },
  { path: 'input', component: InputComponent },
  { path: 'processing', component: ProcessingComponent },
  { path: 'model', component: ModelComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: LandComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
