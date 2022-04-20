import { IUpdateDriverLock } from './../entities/driver-lock.entity';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { DriversRepository } from "../repositories/drivers.repository";

@Injectable({
  providedIn: 'root',
})
export class DriversUpdateLockUseCase {
  constructor(private _driversRepository: DriversRepository) { }

  execute(body: IUpdateDriverLock): Observable<any> {
    return this._driversRepository.fetchUpdateDriverLock(body);
  }
}

