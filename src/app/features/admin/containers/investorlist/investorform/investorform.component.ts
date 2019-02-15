import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-investorform',
  templateUrl: './investorform.component.html',
  styles: []
})
export class InvestorformComponent implements OnInit {
  investorForm: any;
  investorForm1: any;
  id: number;
  bsConfig: Partial<BsDatepickerConfig>;
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
      this._rest.fetch("InvestorPublication/GetInvestorPublicationList/" + this.id).
        subscribe(res => {
          this.investorForm.patchValue({
            publicationID: res[0].publicationID,
            publicationYear: res[0].publicationYear,
            publicationTitle: res[0].publicationTitle,
            publicationShortDescription: res[0].publicationShortDescription,
            publicationDescription: res[0].publicationDescription,
            publicationPriority: res[0].publicationPriority,
            publicationStatus: res[0].publicationStatus
          })
        })
    }

    this.investorForm = this.fb.group({
      publicationID: [],
      publicationYear: [],
      publicationTitle: [],
      publicationShortDescription: [],
      publicationDescription: [],
      publicationPriority: [],
      publicationStatus: []
    })
  }

  SaveInvestor() {
    this.investorForm1 = Object.assign({}, this.investorForm.value);
    this._rest.post("InvestorPublication/SaveInvestorPublication", this.investorForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.investorForm.reset();
  }
}
