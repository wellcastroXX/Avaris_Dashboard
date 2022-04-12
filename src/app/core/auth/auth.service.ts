import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { IRequest } from './../cross/connector/models/request.model';
import { Observable } from 'rxjs';
import { HttpConnectorService } from './../cross/connector/http-connector.service';

export interface ICredencial {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private readonly LOGIN_URL = '/account' 

  constructor(
    private _httpConnectorService: HttpConnectorService,
    private _router: Router
  ) {

  }

  signIn(credencials: ICredencial): Observable<any> {

    const req: IRequest = {
      endpoint: this.LOGIN_URL,
      body: credencials
    };

    return this._httpConnectorService.post<ICredencial>(req);
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
