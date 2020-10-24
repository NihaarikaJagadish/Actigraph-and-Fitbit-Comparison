import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FitbitBothComponent } from './fitbit-both/fitbit-both.component';
import { FitbitActigraphComponent } from './fitbit-actigraph/fitbit-actigraph.component';
import { UdithComponent } from './udith/udith.component';
import { PavanComponent } from './pavan/pavan.component';
import { YagneshComponent } from './yagnesh/yagnesh.component';

const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "LeftandRightHandFitbit", component: FitbitBothComponent},
  { path: "FitbitActigraphComponent", component: FitbitActigraphComponent},
  { path: "participant1", component: UdithComponent},
  { path: "participant2", component: PavanComponent},
  { path: "participant3", component: YagneshComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
