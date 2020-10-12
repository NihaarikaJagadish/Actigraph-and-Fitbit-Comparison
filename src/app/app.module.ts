import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { FitbitBothComponent } from './fitbit-both/fitbit-both.component';
import { FirstComponent } from './first/first.component';
import { FitbitActigraphComponent } from './fitbit-actigraph/fitbit-actigraph.component';

@NgModule({
  declarations: [
    AppComponent,
    FitbitBothComponent,
    FirstComponent,
    FitbitActigraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
