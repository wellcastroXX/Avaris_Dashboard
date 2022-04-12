import { environment } from './../../../../environments/environment';
import { IRequestOptions } from './models/request-options.model';
import { IRequest } from './models/request.model';
import { IConfiguration } from './../configuration/models/configuration.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectorService {
  private _API_LOCAL_URL = environment.API_LOCAL;

  constructor(
    private _http: HttpClient
  ) {

  }

  request(
    name: string,
    options?: {
      body?: any;
      params?:
      | HttpParams
      | {
        [param: string]: string | string[];
      };
      headers?:
      | HttpHeaders
      | {
        [header: string]: string | string[];
      };
    },
  ): Observable<any> {
    const operation = Object.assign(
      {
        method: 'GET'
      },
    );
    const url = `${operation.path}`;
    const observe = (operation.observe !== undefined ? operation.observe : 'body') as 'body';
    const responseType = (operation.responseType !== undefined ? operation.responseType : 'json') as 'json';
    const requestOptions = Object.assign({}, options, {
      observe,
      reportProgress: operation.reportProgress !== undefined ? operation.reportProgress : false,
      responseType,
      withCredencials: operation.withCredencials !== undefined ? operation.withCredencials : false
    });
    return this._http.request<Observable<any>>(operation.method, url, requestOptions);
  }

  post<T>(request: IRequest): Observable<T> {
    this._removeNullParams(request.body);

    return this._http.post<T>(`${this._API_LOCAL_URL}${request.endpoint}`, request.body, this._setOptions(request));
  }

  get(request: IRequest): Observable<any> {
    return this._http.get<any>(`${this._API_LOCAL_URL}${request.endpoint}`, this._setOptions(request));
  }

  put<T>(request: IRequest): Observable<T> {
    this._removeNullParams(request.body);

    return this._http.put<T>(`${this._API_LOCAL_URL}${request.endpoint}`, request.body, this._setOptions(request));
  }

  delete<T>(request: IRequest): Observable<T> {
    return this._http.delete<T>(`${this._API_LOCAL_URL}${request.endpoint}`, this._setOptions(request));
  }

  private _setOptions(request: IRequest) {
    const options: IRequestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': '*'
      })
    }

    if (request.hasOwnProperty('fullResponse')) {
      options.observe = 'response';
    }

    if (request.hasOwnProperty('queryString')) {
      this._removeNullParams(request.queryString);
      options.params = {
        ...request.queryString
      }
    }
    return options;
  }

  private _removeNullParams(obj: any) {
    for (const prop in obj) {
      if (obj[prop] && obj[prop].length <= 0) {
        delete obj[prop]
      }
    }
  }
}