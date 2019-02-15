import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-wattswisdomform',
  templateUrl: './wattswisdomform.component.html',
  styles: []
})
export class WattswisdomformComponent implements OnInit {
  wattswisdomForm: any;
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

    if (this.id != 0) {
      this._rest.fetch("WattsWisdom/GetWattsWisdom/" + this.id).
        subscribe(res => {
          this.wattswisdomForm.patchValue({
            WisdomID: res[0].WisdomID,
            WisdomName: res[0].WisdomName,
            WisdomDesignation: res[0].WisdomDesignation,
            WisdomDescription: res[0].WisdomDescription,
            Status: res[0].Status
          })
        })
    }
    this.wattswisdomForm = this.fb.group({
      WisdomID: [],
      WisdomName: [],
      WisdomDesignation: [],
      WisdomDescription: [],
      Status: []
    })
  }

  SaveWattsWisdom() {
    this._rest.post("WattsWisdom/SaveWattsWisdom", this.wattswisdomForm.value).
      subscribe(res => {
        this._alertify.success("Added Sucessfully");
        this.reset();
      })
  }

  reset()
  {
    this.wattswisdomForm.reset();
  }
}
