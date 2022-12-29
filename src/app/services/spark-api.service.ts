import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparkApiService {

  constructor(private http: HttpClient) { }

  get_Journal_By_Month() {
    return this.http.get(
      'http://localhost:5000/api/ArticlesByMonth/');
  }

  get_Journal_By_Year() {
    return this.http.get(
      'http://localhost:5000/api/ArticlesByYear/');
  }

  get_journal_by_country() {
    return this.http.get(
      'http://localhost:5000/api/ArticlesByCountry/');
  }

  get_journal_by_Quartile() {
    return this.http.get(
      'http://localhost:5000/api/ArticlesByQuartile/');
  }
  get_q1_by_country() {
    return this.http.get(
      'http://localhost:5000/api/Q1ByCountry/');
  }
  get_q2_by_country() {
    return this.http.get(
      'http://localhost:5000/api/Q2ByCountry/');
  }

  get_long_lat_from_address( address : string) {
 
    let queryParams = new HttpParams();
    queryParams = queryParams.append("address",address);


    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '9ebfcf5369msh3c002d32487f06ep121fafjsn198cc7013197')
      .set('X-RapidAPI-Host', 'address-from-to-latitude-longitude.p.rapidapi.com');

    return this.http.get(
      'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi', { headers: headers, params: queryParams });
  }
}
