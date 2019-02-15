import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthloginService {



  constructor(private _httpclient: HttpClient) { }

  Login(data) {
    var localStorageData: any = [];
    debugger;
    return this._httpclient.post(environment.apiToken, data)
      .pipe(map((user: any) => {
        if (user) {
          debugger;
          console.log(user.token);
          console.log(user.Email);
          // localStorageData.push(user.token);
          // localStorageData.push(user.Email);
          // localStorage.setItem('authToken',JSON.stringify(localStorageData));
          localStorage.setItem('authToken', user.token);
        }
        return user;
      }))
  }

  isAuthenticated() {
debugger;
    return localStorage.getItem('authToken');

  }


  isLogout() {
    return localStorage.removeItem('authToken');

  }


  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      debugger
     
      return this._httpclient.post(environment.apiPath + 'Speaker/SpeakerName', { Speaker_name: control.value })
        .pipe(
          map((res: any) => {
            debugger
            // if username is already taken
            if (res.Speaker_name) {

              // return error
              return (res.Speaker_name) ? { 'userNameExists': true } : null;
            }
          })
        );
    };
  }

}
