import { UsersListUseCase } from '../../domain/usecases/fetch-users-list.usecase';
import { tap, mergeMap, catchError } from 'rxjs/operators';
import { StateContext } from '@ngxs/store';
import { FetchUsersList, FetchUsersSuccess, FetchUsersError } from './user.actions';
import { Action } from '@ngxs/store';
import { Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';


export interface IUsersStateModel {
  dataList: any;
  error: any;
  isDataLoading: boolean;
}

@State<IUsersStateModel>({
  name: 'users',
  defaults: {
    dataList: [],
    error: null,
    isDataLoading: false,
  }
})
@Injectable()
export class UsersStates {
  constructor(
    private _usersListUseCase: UsersListUseCase
  ) { }

  @Selector()
  public static getUsersList(state: IUsersStateModel) {
    return state;
  }

  @Action(FetchUsersList)
  public fetchUsersList(ctx: StateContext<IUsersStateModel>) {
    return this._usersListUseCase.execute().pipe(
      tap(() => {
        ctx.patchState({
          isDataLoading: false,
        });
      }),
      mergeMap((value: IUsersStateModel) => {
        return ctx.dispatch(new FetchUsersSuccess(value));
      }),
      catchError((error) => {
        return ctx.dispatch(new FetchUsersError(error));
      })
    )
  }

  @Action(FetchUsersSuccess)
  public fetchUserSuccess(
    ctx: StateContext<IUsersStateModel>,
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

  @Action(FetchUsersError)
  public fetchUserError(
    ctx: StateContext<IUsersStateModel>,
    { error }: FetchUsersError
  ) {
    ctx.setState({
      dataList: null,
      error: error,
      isDataLoading: false,
    });
  }
}