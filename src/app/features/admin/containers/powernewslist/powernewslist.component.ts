import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-powernewslist',
  templateUrl: './powernewslist.component.html',
  styleUrls: ['./powernewslist.component.css']
})
export class PowernewslistComponent implements OnInit {
  powerNewsData: Array<any>=[]
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getPowerNewsList();
  }

  getPowerNewsList()
  {
this._rest.fetch("PowerNew/GetPowerNewsList").
subscribe(res=>{
  this.powerNewsData=res;
})
  }
}
