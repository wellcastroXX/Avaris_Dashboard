import { Injectable } from '@angular/core';
import { ToSignRepository } from '../../domain/repositories/to-sign.repository';

@Injectable()
export class ToSignRepositoryImpl extends ToSignRepository {
  constructor() {
    super();
  }
}