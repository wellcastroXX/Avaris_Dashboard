import { DriversListUseCase } from './../../../drivers/domain/usecases/fetch-drivers-list.usecase';
import { UsersListUseCase } from './../../../users/domain/usecases/fetch-users-list.usecase';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(
    private _store: Store,
    private _usersListUseCase: UsersListUseCase,
    private _driversListUseCase: DriversListUseCase
  ) { }

  getDriversList() {
    return this._driversListUseCase.execute();
  }

  getUsersList() {
    return this._usersListUseCase.execute();
  }
}