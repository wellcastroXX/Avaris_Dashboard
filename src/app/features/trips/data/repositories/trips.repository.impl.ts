import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TripsDataSource } from '../datasources/trips.data-source';
import { TripsRepository } from '../../domain/repositories/trips.repository';

@Injectable()
export class TripsRepositoryImpl extends TripsRepository {
  constructor(
    private _tripsDataSource: TripsDataSource
  ) {
    super();
  }

  getTripsList(): Observable<any> {
    return this._tripsDataSource.getTripsList();
  }
}