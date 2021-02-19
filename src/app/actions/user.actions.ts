import {Action, createAction, props} from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypes {
    LoadUsers = '[User] Load Users',
    AddUser = '[User] Add User',
    UpsertUser = '[User] Upsert User',
    AddUsers = '[User] Add Users',
    UpsertUsers = '[User] Upsert Users',
    UpdateUser = '[User] Update User',
    UpdateUsers = '[User] Update Users',
    DeleteUser = '[User] Delete User',
    DeleteUsers = '[User] Delete Users',
    ClearUsers = '[User] Clear Users'
}
export class LoadUsers implements Action {
    readonly type = UserActionTypes.LoadUsers;
    constructor(public payload: {users: User[]}) {}
}
export class AddUser implements Action {
    readonly type = UserActionTypes.AddUser;
    constructor(public payload: {users: User[]}) {}
}
export class AddUsers implements Action {
    readonly type = UserActionTypes.AddUsers;
    constructor(public payload: {users: User[]}) {}
}
