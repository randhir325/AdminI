import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';
import {RadioButtonModule} from 'primeng/radiobutton';

const Import_Export=[
  CommonModule, FormsModule, ReactiveFormsModule,CalendarModule,EditorModule,RadioButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    Import_Export
  ],
  exports:[
    Import_Export
  ]
})
export class UiKitModule { }
