import { HttpHeaders, HttpParams } from "@angular/common/http";


export interface IRequestOptions {
  headers?:
  | HttpHeaders
  | {
    [Headers: string]: string | string[];
  };
  observe?: any;
  params?: 
  | HttpParams
  | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}