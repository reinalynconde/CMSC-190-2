import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { InputComponent } from './input/input.component';
import { ProcessingComponent } from './processing/processing.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'processing', component: ProcessingComponent},
  { path: 'model', component: ModelComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
