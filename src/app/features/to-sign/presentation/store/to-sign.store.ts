import { Injectable } from '@angular/core';
import { State } from "@ngxs/store";

export interface IToSignStateModel {
  dataList: any;
  error: any;
  isDataLoading: boolean;
}

@State<IToSignStateModel>({
  name: 'toSign',
  defaults: {
    dataList: [],
    error: null,
    isDataLoading: false,
  }
})
@Injectable()
export class ToSignStates {

  constructor() { }

}