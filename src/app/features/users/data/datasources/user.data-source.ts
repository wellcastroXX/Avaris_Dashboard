import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class UsersDataSource {
  abstract getUserList(): Observable<any>;
}

@Injectable()
export class UsersDataSourceImpl extends UsersDataSource {

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private firestore: AngularFirestore,
  ) {
    super();
  }

  getUserList(): Observable<any> {
    return this.firestore.collection('/usuarios').snapshotChanges();
  }
}

