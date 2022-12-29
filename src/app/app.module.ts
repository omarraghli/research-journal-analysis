import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyseBIComponent } from './analyse-bi/analyse-bi.component';
import { HttpClientModule } from '@angular/common/http';
import { MapRepresentationJournalCountryComponent } from './map-representation-journal-country/map-representation-journal-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyseBIComponent,
    MapRepresentationJournalCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
