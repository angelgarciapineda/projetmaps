import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';//obtener los datos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  //Default values
  location = { cityName: 'Nantes'};
  weather = undefined;

  //create instance of WeatherService
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName);
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName)
      .subscribe(
        /*subscribe can return two things, the data or an error */
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  //This method will execute the form of app.component.html (<form (submit)="submitLocation(cityName, cityCode)">)
  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);

      cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }

}
