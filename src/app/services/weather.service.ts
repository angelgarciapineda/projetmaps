import { Injectable } from '@angular/core';
//HttpClient is to request requests from http
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  //Key from API
  apiKey= '0983694babdaf2a6579ab01bd868bca0';
  URI: string = '';

  //create instance of HttpClient
  constructor(private http: HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }

  /*
  to ask for the climate of a city 
  you need the name of the city and the country code */
  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName},fr`);
    /* Exemple
     https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=${cityName},${countryCode}*/
  }
}
