import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {zipcodeReducer, ZipcodeState} from "./zip-codes.reducer";
import {currentConditionsReducer, CurrentConditionsState} from "./current-conditions.reducer";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";


export interface State {
  zipcodes: ZipcodeState
  currentConditions: CurrentConditionsState,
  router: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Just simple function select zipcode from our state
export const selectZipcodeState = (state: State) => state.zipcodes;

// It creates a smart selector that we will be able to cache the last value returned by the initial selector function selectZipcodeState, so if the state doesn't change, then the selector will return the latest value and won't try to perform any expensive selection operation.
// Faster
export const selectZipcodeList = createSelector(selectZipcodeState,
    (state: ZipcodeState) => state.zipcodes);
