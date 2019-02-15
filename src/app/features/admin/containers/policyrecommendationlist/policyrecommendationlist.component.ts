import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-policyrecommendationlist',
  templateUrl: './policyrecommendationlist.component.html',
  styles: []
})
export class PolicyrecommendationlistComponent implements OnInit {
  policyrecommendationData: Array<any> = [];
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.GetPolicyRecommendationList();
  }

  GetPolicyRecommendationList() {
    this._rest.fetch("PolicyRecommendation/GetPolicyRecommendationList").
      subscribe(res => {
        this.policyrecommendationData = res;
        console.log(this.policyrecommendationData);
      })
  }

}
