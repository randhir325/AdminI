import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keyspeakerlist',
  templateUrl: './keyspeakerlist.component.html',
  styleUrls: ['./keyspeakerlist.component.css']
})
export class KeyspeakerlistComponent implements OnInit {
  keySpeakerData: Array<any> = [];
  constructor(private rest: RestService,
    private _alert: AlertifyService,
    private _router: Router) { }

  ngOnInit() {
    this.getKeySpeakerList();
  }

  getKeySpeakerList() {
    this.rest.fetch("KeySpeaker/GetKeySpeakerList").
      subscribe(res => {
        console.log(res);
        this.keySpeakerData = res;
      })
  }

}
