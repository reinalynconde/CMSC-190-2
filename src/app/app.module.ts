import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgIf, LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { Editor3DModule } from 'ng2-3d-editor';
import { BrowserXhr } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';

import { InputService } from './input.service';

import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { InputComponent } from './input/input.component';
import { ProcessingComponent } from './processing/processing.component';
import { ModelComponent } from './model/model.component';
import { OrigamiService } from './services/origami.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WebSocketService } from './services/web-socket.service';
import { CustExtBrowserXhr } from './services/cust-ext-browser-xhr';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';

/*const appRoutes: Routes = [
  {
    path: '/',
    component: AppComponent,
    data: { title: 'Origami' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
*/
@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    InputComponent,
    ProcessingComponent,
    ModelComponent,
    SampleComponentComponent,
    SampleComponent,
    AboutComponent,
    ContactComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SuiModule,
    AppRoutingModule,
    FormsModule/*,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  providers: [HttpClientModule, InputService, OrigamiService, WebSocketService,
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
platformBrowserDynamic().bootstrapModule(AppModule);
