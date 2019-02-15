import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-pressform',
  templateUrl: './pressform.component.html',
  styles: []
})
export class PressformComponent implements OnInit {
  pressForm: any;
  pressForm1: any;
  bsConfig: Partial<BsDatepickerConfig>;
  id: number;
  constructor(private _rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
    if (this._av.snapshot.params["id"]) {
      this.id = parseInt(this._av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }

    if (this.id > 0) {
      this._rest.fetch("Press/GetPressListById/" + this.id).
        subscribe(res => {
          this.pressForm.patchValue({
            PressID: res[0].PressID,
            Type: res[0].Type,
            Title: res[0].Title,
            Press_content: res[0].Press_content,
            external_link: res[0].external_link,
            PressDate: res[0].PressDate,
            PublisherDetails: res[0].PublisherDetails,
            Priority_date: res[0].Priority_date,
            Status: res[0].Status
          });
        });
    }

    this.pressForm = this.fb.group({
      PressID: [],
      Type: [],
      Title: [],
      Press_content: [],
      external_link: [],
      PressDate: [],
      PublisherDetails: [],
      Priority_date: [],
      Status: []
    });

  }

  SavePress() {
    debugger;
    this.pressForm1=Object.assign({},this.pressForm.value);
    this._rest.post("Press/SavePress", this.pressForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.pressForm.reset();
  }

}
