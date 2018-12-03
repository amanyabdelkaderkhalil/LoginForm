import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component'
import { DetailsComponent } from './components/details/details.component';
const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "details",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
