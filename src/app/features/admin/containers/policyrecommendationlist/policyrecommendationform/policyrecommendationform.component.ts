import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-policyrecommendationform',
  templateUrl: './policyrecommendationform.component.html',
  styles: []
})
export class PolicyrecommendationformComponent implements OnInit {
  policyrecommendationForm: any;
  policyrecommendationForm1: any;
  id: Number=0;
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
      this._rest.fetch("PolicyRecommendation/GetPolicyRecommendationList/" + this.id).
        subscribe(res => {
          this.policyrecommendationForm.patchValue({
            PolicyRecomId: res[0].PolicyRecomId,
            PolicyRecomName: res[0].PolicyRecomName,
            PolicyRecomDetails: res[0].PolicyRecomDetails,
            PriorityDate: res[0].PriorityDate,
            Status: res[0].Status
          })
        })
    }
    this.policyrecommendationForm = this.fb.group({
      PolicyRecomId: [],
      PolicyRecomName: [],
      PolicyRecomDetails: [],
      PriorityDate: [],
      Status: []
    })
  }

  SavePolicyRecommendation() {
    this.policyrecommendationForm1 = Object.assign({}, this.policyrecommendationForm.value)
    this._rest.post("PolicyRecommendation/SavePolicyRecommendation", this.policyrecommendationForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.policyrecommendationForm.reset();
  }

}
