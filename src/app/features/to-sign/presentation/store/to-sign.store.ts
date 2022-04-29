import { tap, mergeMap, catchError } from 'rxjs/operators';
import { FetchToSignList, FetchToSignSuccess, FetchToSignError } from './to-sign.actions';
import { UsersListUseCase } from './../../../users/domain/usecases/fetch-users-list.usecase';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";

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

  constructor(
    private _usersListUseCase: UsersListUseCase
  ) { }

  @Selector()
  public static getToSignList(state: IToSignStateModel) {
    return state;
  }

  @Action(FetchToSignList)
  public fetchUsersList(ctx: StateContext<IToSignStateModel>) {
    return this._usersListUseCase.execute().pipe(
      tap(() => {
        ctx.patchState({
          isDataLoading: false,
        });
      }),
      mergeMap((value: IToSignStateModel) => {
        return ctx.dispatch(new FetchToSignSuccess(value));
      }),
      catchError((error) => {
        return ctx.dispatch(new FetchToSignError(error));
      })
    )
  }

  @Action(FetchToSignSuccess)
  public fetchToSignSuccess(
    ctx: StateContext<IToSignStateModel>,
    { payload }: any
  ) {
    let newDataList = [];
    newDataList = payload.map((e: any) => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      };
    });
    ctx.setState({
      dataList: newDataList,
      error: null,
      isDataLoading: false,
    });
  }

  @Action(FetchToSignError)
  public fetchToSignError(
    ctx: StateContext<IToSignStateModel>,
    { error }: FetchToSignError
  ) {
    ctx.setState({
      dataList: null,
      error: error,
      isDataLoading: false,
    });
  }

}