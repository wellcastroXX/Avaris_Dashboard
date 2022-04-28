import { IUpdateDriverLock } from './../../domain/entities/driver-lock.entity';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";

export abstract class DriversDataSource {
  abstract getDriversList(): Observable<any>;
  abstract fetchUpdateDriverLock(body: IUpdateDriverLock): Observable<any>;
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

  fetchUpdateDriverLock(body: IUpdateDriverLock): Observable<any> {
    return of(this.firestore.collection('/motoristas').doc(body.id).update({
      Locked: body.Locked
    }));
  }
}