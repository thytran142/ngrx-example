import {Action, createAction, props} from '@ngrx/store';

export enum CurrentConditionActionTypes {
    CurrentConditionsLoaded = "[CurrentConditions] CurrentConditions Loaded",
    CurrentConditionsLoadFailed = "[CurrentConditions] CurrentConditions Load Failed"
}
export class CurrentConditionsLoaded implements Action {
    readonly type = CurrentConditionActionTypes.CurrentConditionsLoaded;
    constructor(public zipcode: string, public conditions: any) {}
}
export class CurrentConditionsLoadFailed implements Action {
    readonly type = CurrentConditionActionTypes.CurrentConditionsLoadFailed;
    constructor(public zipcode: string, public error: any){}
}
export type CurrentConditionActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed;




