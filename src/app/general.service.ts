import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private resourceUrl = "/api";
  authenticated = false;

  constructor(private http: HttpClient) { }

  public getInitialData(): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/initial-data`);
  }

  public logout(): Observable<any> {
    return this.http.post('logout', {});
  }

  public authenticate(credentials, callback): void {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
    } : {});

    this.http.get(`${this.resourceUrl}/user`, {headers: headers})
             .pipe(
               catchError(err => {
                 if(err.status === 401) {
                   callback && callback({'status': err.status, 'error': err.error});
                   return throwError("Unauthorised login");
                 } else {
                   return throwError(`Error ${err.status} occurred: ${err.error}`);
                 }
               })
             )
             .subscribe(response => {
                this.authenticated = !!response['name'];
                return callback && callback();
    });
  }
}
