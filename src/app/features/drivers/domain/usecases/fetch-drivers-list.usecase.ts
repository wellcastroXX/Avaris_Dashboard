import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { DriversRepository } from "../repositories/drivers.repository";

@Injectable({
  providedIn: 'root',
})
export class DriversListUseCase {
  constructor(private _driversRepository: DriversRepository) { }

  execute(): Observable<any> {
    return this._driversRepository.getDriversList()
  }
}

