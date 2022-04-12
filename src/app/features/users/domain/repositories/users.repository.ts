import { Observable } from 'rxjs';

export abstract class UsersRepository {

  abstract getUserList(): Observable<any>;
}