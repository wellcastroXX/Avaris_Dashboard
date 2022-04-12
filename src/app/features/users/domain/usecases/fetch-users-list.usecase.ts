import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { UsersRepository } from "../repositories/users.repository";

@Injectable({
  providedIn: 'root',
})
export class UsersListUseCase {
  constructor(private _usersRepository: UsersRepository) { }

  execute(): Observable<any> {
    return this._usersRepository.getUserList();
  }
}