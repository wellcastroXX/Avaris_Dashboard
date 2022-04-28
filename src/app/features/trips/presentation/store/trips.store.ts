import { FetchTripsListUseCase } from './../../domain/usecases/fetch-trips-list.usecase';
import { FetchTripsList, FetchTripsSuccess, FetchTripsError } from './trips.actions';
import { tap, mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";

export interface ITripsStateModel {
  dataList: any;
  error: any;
  isDataLoading: boolean;
}

@State<ITripsStateModel>({
  name: 'trips',
  defaults: {
    dataList: [],
    error: null,
    isDataLoading: false,
  }
})
@Injectable()
export class TripsStates {
  constructor(
    private _tripsListUserCase: FetchTripsListUseCase,
  ) { }

  @Selector()
  public static getTripsList(state: ITripsStateModel) {
    return state;
  }

  @Action(FetchTripsList)
  public fetchTripsList(ctx: StateContext<ITripsStateModel>) {
    return this._tripsListUserCase.execute().pipe(
      tap(() => {
        ctx.patchState({
          isDataLoading: false,
        });
      }),
      mergeMap((value: ITripsStateModel) => {
        return ctx.dispatch(new FetchTripsSuccess(value));
      }),
      catchError((error) => {
        return ctx.dispatch(new FetchTripsError(error));
      })
    )
  }
}