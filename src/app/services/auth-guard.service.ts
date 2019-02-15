import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { AuthloginService } from './authlogin.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private _rest: AuthloginService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._rest.isAuthenticated()) {
     debugger;
        return true;
    }


    // navigate to login page
    this._router.navigate(['/']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._rest.isAuthenticated()) {
     debugger;
        return true;
    }
    

    // navigate to login page
    this._router.navigate(['/']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }


}
