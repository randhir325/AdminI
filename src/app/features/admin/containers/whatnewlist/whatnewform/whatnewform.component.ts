import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-whatnewform',
  templateUrl: './whatnewform.component.html',
  styles: []
})
export class WhatnewformComponent implements OnInit {
  whatnewForm: any;
  whatnewForm1: any;
  bsConfig: Partial<BsDatepickerConfig>;
  id: number;
  constructor(private _rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
    if (_av.snapshot.params["id"]) {
      this.id = parseInt(_av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }

    if (this.id != 0) {
      this._rest.fetch("WhatNew/GetWhatNewList/" + this.id).
        subscribe(res => {
          this.whatnewForm.patchValue({
            NewID: res[0].NewID,
            NewTitle: res[0].NewTitle,
            NewDescription: res[0].NewDescription,
            NewVenue: res[0].NewVenue,
            NewLink: res[0].NewLink,
            NewEventDate: res[0].NewEventDate,
            NewDate: res[0].NewDate,
            Status: res[0].Status
          })
        })
    }
    this.whatnewForm = this.fb.group({
      NewID:[],
      NewTitle:[],
      NewDescription:[],
      NewVenue:[],
      NewLink:[],
      NewEventDate:[],
      NewDate:[],
      Status:[]
    })
  }

  SaveWhatNew() {
    this.whatnewForm1 = Object.assign({}, this.whatnewForm.value);
    this._rest.post("WhatNew/SaveWhatNew", this.whatnewForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.whatnewForm.reset();    
  }
}
