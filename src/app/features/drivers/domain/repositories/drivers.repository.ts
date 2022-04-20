import { IUpdateDriverLock } from './../entities/driver-lock.entity';
import { Observable } from 'rxjs';


export abstract class DriversRepository {

  abstract getDriversList(): Observable<any>;

  abstract fetchUpdateDriverLock(body: IUpdateDriverLock): Observable<any>;
}