import { UsersListUseCase } from './../../domain/usecases/fetch-users-list.usecase';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _usersListUserCase: UsersListUseCase
  ) {
  }

  getUserList() {
    return this._usersListUserCase.execute();
  }
}