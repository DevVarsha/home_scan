
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { HttpClientModule, HttpRequest,  HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiURL = 'http://technorizen.co.in/HomeScan/webservice/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  http: any;
  authToken: any;
  user: any;

  constructor(private httpClient: HttpClient  ) { }

  getAll(user: any, uId: any): Observable<User[]> {
    uId = localStorage.getItem('logId');
    console.log('User Id', uId);
    return this.httpClient.get<User[]>(this.apiURL + 'get_profile?user_id=' + uId  )
    .pipe(
      catchError(this.errorHandler)
    );
  }

  create(user: any): Observable<User> {
    console.log('registeration api');
    return this.httpClient.post<User>(this.apiURL + 'signup?user_name=' + user.user_name +
     '&password=' + user.password + '&email=' + user.email + '&mobile=' + user.mobile + '&whatsapp_number=' + user.whatsapp_number
     + '&address=' + user.address + '&register_id=123' , JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  find(user: any): Observable<User> {
    console.log('login')
    return this.httpClient.get<User>(this.apiURL + 'login1?email=' + user.email + '&password=' + user.password, )
    .pipe(
      catchError(this.errorHandler)
    );
  }

  forgot(user: any): Observable<User> {
    console.log('forgot api');
    return this.httpClient.get<User>(this.apiURL + 'forgot_password?email=' + user.email )
    .pipe(
      catchError(this.errorHandler)
    );
  }


  update(user: any, usId: any): Observable<User> {
    console.log('update Profile');
    usId = localStorage.getItem('logId');
    return this.httpClient.put<User>(this.apiURL + 'update_profile?user_name=' + user.user_name +
     '&email=' + user.email + '&mobile=' + user.mobile + '&whatsapp_number=' + user.whatsapp_number
    + '&address=' + user.address + '&user_id=' + usId + '&register_id=123' , JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // tslint:disable-next-line: typedef
  delete(id: any){
    return this.httpClient.delete<User>(this.apiURL + 'signup' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // tslint:disable-next-line: typedef
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  // tslint:disable-next-line: typedef
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
