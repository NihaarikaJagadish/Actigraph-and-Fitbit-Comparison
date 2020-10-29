import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FitbitBothComponent } from './fitbit-both/fitbit-both.component';
import { FitbitActigraphComponent } from './fitbit-actigraph/fitbit-actigraph.component';
import { UdithComponent } from './udith/udith.component';
import { PavanComponent } from './pavan/pavan.component';
import { YagneshComponent } from './yagnesh/yagnesh.component';
import { ActivityParticipant1Component } from './activity-participant1/activity-participant1.component';
import { ActivityParticipant2Component } from './activity-participant2/activity-participant2.component';

const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "LeftandRightHandFitbit", component: FitbitBothComponent},
  { path: "FitbitActigraphComponent", component: FitbitActigraphComponent},
  { path: "participant1", component: UdithComponent},
  { path: "participant2", component: PavanComponent},
  { path: "participant3", component: YagneshComponent},
  { path: "Activityparticipant1", component: ActivityParticipant1Component},
  { path: "Activityparticipant2", component: ActivityParticipant2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
