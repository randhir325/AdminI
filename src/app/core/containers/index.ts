import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Routes } from '@angular/router'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
//import { SafePipe } from 'src/app/services/pipe.safe';

export const containers = [
    AdminhomeComponent, AdminloginComponent, PagenotfoundComponent
];
export const routes: Routes = [
    {
         path: "admin", component: AdminhomeComponent, canActivate:[AuthGuardService], children: [
        { path: '', loadChildren: '../../app/features/admin/admin.module#AdminModule',canActivateChild:[AuthGuardService] }
         ]
     },
    
    {
        path: "", component: AdminloginComponent
    },

    { path: "**", component: PagenotfoundComponent }
];

