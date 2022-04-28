import { Injectable } from "@angular/core";

export abstract class ToSignDataSource { }

@Injectable()
export class ToSignDataSourceImpl extends ToSignDataSource {

  constructor() {
    super();
  }
}