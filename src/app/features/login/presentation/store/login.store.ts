import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';


export interface IUsersStateModel {
  error: any;
  isDataLoading: boolean;
}

@State<IUsersStateModel>({
  name: 'login',
  defaults: {
    error: null,
    isDataLoading: false,
  }
})
@Injectable()
export class LoginStates {
  constructor() { }
}