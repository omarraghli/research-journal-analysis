import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { SparkApiService } from '../services/spark-api.service';
@Component({
  selector: 'app-map-representation-journal-country',
  templateUrl: './map-representation-journal-country.component.html',
  styleUrls: ['./map-representation-journal-country.component.css']
})
export class MapRepresentationJournalCountryComponent implements OnInit {

  private map!: L.Map;
  private centroid: L.LatLngExpression = [0, 0]; //

  private async initMap(): Promise<void> {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      noWrap: true,
      maxZoom: 3,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    //get countries and their count
    const countries: any[] = []
    const count: any[] = []
    this.sprkservice.get_journal_by_country().subscribe((data: any) => {
      for (var i = 0; i < Object.keys(data).length; i++) {
        countries.push(data[i]['Countries']);
        count.push(data[i]["count"])
      }

    })

    console.log(countries.length)

    for (var i = 0; i <countries.length ; i++) {

      this.sprkservice.get_long_lat_from_address(countries[i]).subscribe((data: any) => {
        console.log(countries[i])
        console.log(data)
        console.log(data["Results"][0]["latitude"])
        console.log(data["Results"][0]["longitude"])
        const marker = L.marker([data["Results"][0]["latitude"], data["Results"][0]["longitude"]]);
        marker.addTo(this.map);
      })
      //await new Promise(r => setTimeout(r, 5000));

    }

    tiles.addTo(this.map);

  }


  constructor(private sprkservice: SparkApiService) { }

  ngOnInit(): void {
    this.initMap();
  }









  // this.sprkservice.get_long_lat_from_address().subscribe((data: any) => {

  //   console.log(data)
  // })

}

