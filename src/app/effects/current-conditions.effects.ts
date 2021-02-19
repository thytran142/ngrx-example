import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {ZipcodeActionTypes} from "../actions/zipcode.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {CurrentConditionsLoaded, CurrentConditionsLoadFailed} from "../actions/current-condition.actions";
import {of} from "rxjs";
import {WeatherService} from "../weather.service";



@Injectable()
export class CurrentConditionsEffects {
  loadCurrentConditions$ = createEffect(() => this.actions$.pipe(
      ofType(ZipcodeActionTypes.AddZipcode),
      mergeMap((action) => this.weatherService.loadCurrentConditions(action['zipcode'])
          .pipe(
              map(data => of(new CurrentConditionsLoaded(action['zipcode'], data))),
              catchError((err) => of(new CurrentConditionsLoadFailed(action['zipcode'], err)))
          ))
  ))
  constructor(private actions$: Actions,
              private weatherService: WeatherService) {}

}
