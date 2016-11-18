import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadingCars: boolean = false;
  loadingUserInfo: boolean = false;
  cars: any[] = [];
  userInfo: any = {};

  loadData() {
    this.loadingCars = true;
    setTimeout(() => {
      this.cars = [
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"}
      ]
      this.loadingCars = false;
    }, 2000);
  }


  loadUserInfo(){
    this.loadingUserInfo = true;
    setTimeout(() => {
      this.userInfo = {
        firstName: "Amir",
        lastName: "Chervinsky",
        blog: "http://amirush.blogspot.com"
      }
      this.loadingUserInfo = false;
    },2000);

  }
}
