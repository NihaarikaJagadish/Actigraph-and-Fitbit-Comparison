import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { FitbitBothComponent } from './fitbit-both/fitbit-both.component';
import { FirstComponent } from './first/first.component';
import { FitbitActigraphComponent } from './fitbit-actigraph/fitbit-actigraph.component';

import { HttpClientModule } from '@angular/common/http';
import { UdithComponent } from './udith/udith.component';
import { PavanComponent } from './pavan/pavan.component';
import { YagneshComponent } from './yagnesh/yagnesh.component';

@NgModule({
  declarations: [
    AppComponent,
    FitbitBothComponent,
    FirstComponent,
    FitbitActigraphComponent,
    UdithComponent,
    PavanComponent,
    YagneshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
