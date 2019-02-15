import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investorlist.component.html',
  styles: []
})
export class InvestorlistComponent implements OnInit {
  investorData: Array<any> = [];
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.GetInvestorList();
  }

  GetInvestorList() {
    this._rest.fetch("InvestorPublication/GetInvestorPublicationList").
      subscribe(res => {
        this.investorData = res;
      })
  }
}
