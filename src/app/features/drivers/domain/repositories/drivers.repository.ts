import { Observable } from 'rxjs';


export abstract class DriversRepository {

  abstract getDriversList(): Observable<any>;
}