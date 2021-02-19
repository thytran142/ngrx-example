import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectZipcodeList, State} from "../reducers";
import {RemoveZipcode} from "../actions/zipcode.actions";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
  zipcodes: Array<String>;
  currentConditions: Map<String, any>;
  constructor(private weatherService : WeatherService,
              private router : Router,
              private store: Store<State>) {
    // Select specified state variables
    // Whenever is changed in the ngrx state, this variables will be modified.
    // store.select(state => state.zipcodes)
    //     .subscribe(zips => this.zipcodes = zips.zipcodes);
    // Since I already added filter function to return only good properties under index.ts, I use here:
    // If anything structure under state is changed, I just simply go to index.ts and modify return selectZipcodeList without going through all components.
    store.select(selectZipcodeList)
        .subscribe(zips => this.zipcodes = zips);

    store.select(state => state.currentConditions)
        .subscribe(conditions => this.currentConditions = conditions.currentConditions);
  }
  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }
  removeZip(zip: string) {
    this.store.dispatch(new RemoveZipcode(zip));
  }
  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
