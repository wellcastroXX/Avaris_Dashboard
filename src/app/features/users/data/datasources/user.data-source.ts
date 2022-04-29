import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export abstract class UsersDataSource {
  abstract getUserList(): Observable<any>;
}

@Injectable()
export class UsersDataSourceImpl extends UsersDataSource {

  constructor(
    private firestore: AngularFirestore,
  ) {
    super();
  }

  getUserList(): Observable<any> {
    return this.firestore.collection('/usuarios').snapshotChanges();
  }
}

