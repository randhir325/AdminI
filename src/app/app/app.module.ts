import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { CoreModule } from '../core/core.module';
//import { RestService } from '../services/rest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertifyService } from '../services/alertify.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthloginService } from '../services/authlogin.service';
import { httpInterceptorsProviders } from '../services/interceptor.service';
import { ErrorInterceptorProvider } from '../services/error-interceptor.service';import { RestService } from '../services/rest.service';

import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([]), CoreModule, HttpClientModule, BrowserAnimationsModule
    
  ],
  
  providers: [ AlertifyService, AuthGuardService, httpInterceptorsProviders,AuthloginService,RestService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
