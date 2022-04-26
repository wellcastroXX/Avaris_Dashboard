import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(    
    private _angularFireAuth: AngularFireAuth,
    private _router: Router
  ) { }

  async signIn(email: string, password: string) {
    return await this._angularFireAuth.signInWithEmailAndPassword(email, password);
  }
}