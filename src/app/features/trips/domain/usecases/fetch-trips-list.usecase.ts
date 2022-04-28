import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { TripsRepository } from '../repositories/trips.repository';

@Injectable({
  providedIn: 'root',
})
export class FetchTripsListUseCase {
  constructor(private _tripsRepository: TripsRepository) { }

  execute(): Observable<any> {
    return this._tripsRepository.getTripsList();
  }
}

