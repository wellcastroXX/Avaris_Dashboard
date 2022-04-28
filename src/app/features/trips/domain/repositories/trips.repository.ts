import { Observable } from 'rxjs';


export abstract class TripsRepository {

  abstract getTripsList(): Observable<any>;
}