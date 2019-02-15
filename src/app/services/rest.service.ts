import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class RestService {
  //authToken: string = localStorage.getItem('authToken');
  _options: string;
  token;
  constructor(private _httpclient: HttpClient, private _router: Router) { }

   public getToken(): string {
     return localStorage.getItem('authToken');
   }

  fetch(url): Observable<any> {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.getToken
    //   })
    // };
    debugger;
    return this._httpclient.get(environment.apiPath + url, this.token);
  }

  post(url, data): Observable<any> {
    debugger;
    //  let httpOptions = {
    //    headers: new HttpHeaders({
    //      'Content-Type': 'application/json',
    //      'Authorization': 'Bearer ' + this.getToken
    //    })
    //  };
    debugger;
    return this._httpclient.post(environment.apiPath + url, data,this.token);
  }

 



  

}
