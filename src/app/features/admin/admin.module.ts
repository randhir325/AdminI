import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import *as fromContainers from './containers';
import { RouterModule } from '@angular/router'
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ModalModule } from 'ngx-bootstrap';
import { SpeakerdetailsComponent } from './containers/speakerdetails/speakerdetails.component';



@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    UiKitModule, RouterModule.forChild(fromContainers.routes),BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
    
  ]
  ,
  entryComponents:[
    SpeakerdetailsComponent
  ]  
})
export class AdminModule { }
