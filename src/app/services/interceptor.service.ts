import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { AuthloginService } from './authlogin.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthloginService, private _router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //var token = JSON.parse(this._authService.isAuthenticated());  
    //var k12= token[0];  
    var token = this._authService.isAuthenticated();
    if (token != null) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      
    }
    else {
      this._router.navigate(["/"]);
    }
    return next.handle(request);
  }
}

export const httpInterceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }
]
