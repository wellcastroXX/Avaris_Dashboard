import { Injectable } from '@angular/core';

export abstract class LoginDataSource {
}

@Injectable()
export class LoginDataSourceImpl extends LoginDataSource {

  constructor() {
    super();
  }
}

