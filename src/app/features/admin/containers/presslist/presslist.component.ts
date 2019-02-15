import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presslist',
  templateUrl: './presslist.component.html',
  styles: []
})
export class PresslistComponent implements OnInit {
  pressData: Array<any> = [];
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getPressList();
  }

  getPressList() {
    this._rest.fetch("Press/GetPressListById").
      subscribe(res => {
        this.pressData = res;
      })
  }
}
