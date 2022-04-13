import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DriversDataSource } from "../datasources/drivers.data-source";
import { DriversRepository } from '../../domain/repositories/drivers.repository';

@Injectable()
export class DriversRepositoryImpl extends DriversRepository {
  constructor(
    private _driversDataSource: DriversDataSource
  ) {
    super();
  }

  getDriversList(): Observable<any> {
    return this._driversDataSource.getDriversList();
  }
}