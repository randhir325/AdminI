import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associatecategorylist',
  templateUrl: './associatecategorylist.component.html',
  styles: []
})
export class AssociatecategorylistComponent implements OnInit {
  associatecategoryData: Array<any> = [];
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getAssociatecategorylist();
  }

  getAssociatecategorylist() {
    this._rest.fetch("AssociatesCategory/GetAssociatesCategoryList").
      subscribe(res => {
        this.associatecategoryData = res;
      })
  }
}
