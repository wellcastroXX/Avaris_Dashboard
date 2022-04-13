import { DriversListUseCase } from './../../domain/usecases/fetch-drivers-list.usecase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private _driversListUserCase: DriversListUseCase
  ) {
  }

  getDriversList() {
    return this._driversListUserCase.execute();
  }
}