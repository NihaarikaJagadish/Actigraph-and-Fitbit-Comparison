import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FitbitBothComponent } from './fitbit-both/fitbit-both.component';

import { FitbitActigraphComponent } from './fitbit-actigraph/fitbit-actigraph.component';
const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "LeftandRightHandFitbit", component: FitbitBothComponent},
  { path: "FitbitActigraphComponent", component: FitbitActigraphComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
