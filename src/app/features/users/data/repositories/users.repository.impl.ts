import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersRepository } from "../../domain/repositories/users.repository";
import { UsersDataSource } from "../datasources/user.data-source";

@Injectable()
export class UsersRepositoryImpl extends UsersRepository {
  constructor(
    private _usersDataSource: UsersDataSource
  ) {
    super();
  }

  getUserList(): Observable<any> {
    return this._usersDataSource.getUserList();
  }
}