import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

export abstract class TripsDataSource {
  abstract getTripsList(): Observable<any>;
 }

@Injectable()
export class TripsDataSourceImpl extends TripsDataSource {

  constructor(
    private firestore: AngularFirestore,
  ) {
    super();
  }

  getTripsList(): Observable<any> {
    return this.firestore.collection('/trips').snapshotChanges();
  }
}