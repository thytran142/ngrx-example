import {Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
    AddZipcode = '[Zipcode] Add zipcode',
    RemoveZipcode = '[Zipcode] Remove zipcode'
}
export class AddZipcode implements Action {
    readonly type = ZipcodeActionTypes.AddZipcode;
    constructor(public zipcode: string) {}
}
export class RemoveZipcode implements Action {
    readonly type = ZipcodeActionTypes.RemoveZipcode;
    constructor(public zipcode: string) {}
}
export type ZipcodeActions = AddZipcode | RemoveZipcode;


