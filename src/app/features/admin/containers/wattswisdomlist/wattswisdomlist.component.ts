import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-wattswisdomlist',
  templateUrl: './wattswisdomlist.component.html',
  styles: []
})
export class WattswisdomlistComponent implements OnInit {
  wattswisdomData: Array<any> = [];
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.getWattsWisdomList();
  }

  getWattsWisdomList() {
    this._rest.fetch("WattsWisdom/GetWattsWisdom").
      subscribe(res => {
        this.wattswisdomData = res;
      })
  }
}
