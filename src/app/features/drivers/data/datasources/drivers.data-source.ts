import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

export abstract class DriversDataSource {
  abstract getDriversList(): Observable<any>;
}

@Injectable()
export class DriversDataSourceImpl extends DriversDataSource {

  constructor(
    private firestore: AngularFirestore,
  ) {
    super();
  }

  getDriversList(): Observable<any> {
    return this.firestore.collection('/motoristas').snapshotChanges();
  }
}