import { Injectable } from "@angular/core";
import { LoginRepository } from "../../domain/repositories/login.repository";

@Injectable()
export class LoginRepositoryImpl extends LoginRepository {
  constructor() {
    super();
  }
}