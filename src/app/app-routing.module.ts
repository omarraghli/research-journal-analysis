import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseBIComponent } from './analyse-bi/analyse-bi.component';
import { MapRepresentationJournalCountryComponent } from './map-representation-journal-country/map-representation-journal-country.component';

const routes: Routes = [
  {
    path: "anayse_bi",
    component : AnalyseBIComponent

  },
  {
    path:"journal_by_county_map",
    component: MapRepresentationJournalCountryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
