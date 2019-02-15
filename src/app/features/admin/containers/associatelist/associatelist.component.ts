import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associatelist',
  templateUrl: './associatelist.component.html',
  styles: []
})
export class AssociatelistComponent implements OnInit {
  associateData: Array<any> = [];
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getAssociateList();
  }

  getAssociateList() {
    this._rest.fetch("Associate/GetListofAssociates").
      subscribe(res => {
        this.associateData = res;
      })
  }
}
