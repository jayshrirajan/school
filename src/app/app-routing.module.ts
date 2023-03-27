import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdmissionComponent} from './admission/admission.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  {
  component: AdmissionComponent,
  path:'admission'
},
{
  component: HomeComponent,
  path:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
