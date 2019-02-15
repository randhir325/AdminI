import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whatnewlist',
  templateUrl: './whatnewlist.component.html',
  styles: []
})
export class WhatnewlistComponent implements OnInit {
  whatnewData: Array<any>=[];
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getWhatNewList();
  }

  getWhatNewList()
  {
    this._rest.fetch("WhatNew/GetWhatNewList").
    subscribe(res=>{
      this.whatnewData=res;
    })
  }
}
