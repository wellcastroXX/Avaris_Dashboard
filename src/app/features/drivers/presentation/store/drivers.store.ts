import { DriversUpdateLockUseCase } from './../../domain/usecases/fetch-update-driver-lock';
import { tap, mergeMap, catchError } from 'rxjs/operators';
import { DriversListUseCase } from './../../domain/usecases/fetch-drivers-list.usecase';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { FetchDriversList, FetchDriversSuccess, FetchDriversError, FetchUpdateDriverLock } from './drivers.actions';


export interface IDriversStateModel {
  dataList: any;
  error: any;
  isDataLoading: boolean;
}

@State<IDriversStateModel>({
  name: 'drivers',
  defaults: {
    dataList: [],
    error: null,
    isDataLoading: false,
  }
})
@Injectable()
export class DriversStates {
  constructor(
    private _driversListUserCase: DriversListUseCase,
    private _driversUpdateLockUseCase: DriversUpdateLockUseCase
  ) { }

  @Selector()
  public static getDriversList(state: IDriversStateModel) {
    return state;
  }

  @Action(FetchDriversList)
  public fetchPaymentsScheduleList(ctx: StateContext<IDriversStateModel>) {
    return this._driversListUserCase.execute().pipe(
      tap(() => {
        ctx.patchState({
          isDataLoading: false,
        });
      }),
      mergeMap((value: IDriversStateModel) => {
        return ctx.dispatch(new FetchDriversSuccess(value));
      }),
      catchError((error) => {
        return ctx.dispatch(new FetchDriversError(error));
      })
    )
  }

  @Action(FetchUpdateDriverLock)
  public paymentsScheduleEdit(ctx: StateContext<IDriversStateModel>, { payload }) {
    return this._driversUpdateLockUseCase.execute(payload).pipe(
      tap(() => {
        ctx.patchState({
          isDataLoading: false,
        });
        return ctx.dispatch(new FetchDriversList());
      }),
      catchError((error) => {
        ctx.patchState({
          error: error
        });
        throw error;
      })
    )
  }

  @Action(FetchDriversSuccess)
  public fetchPaymentsScheduleSuccess(
    ctx: StateContext<any>,
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

  @Action(FetchDriversError)
  public fetchPaymentsScheduleError(
    ctx: StateContext<IDriversStateModel>,
    { error }: FetchDriversError
  ) {
    ctx.setState({
      dataList: null,
      error: error,
      isDataLoading: false
    });
  }
}