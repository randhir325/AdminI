import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  memberData: Array<any> = [];
  constructor(private rest: RestService,
    private _router: Router) { }

  ngOnInit() {
    this.getMemberList();
  }

  getMemberList() {
    this.rest.fetch("Member/GetMemberList").
      subscribe(res => {
        this.memberData = res;
      })
  }
}
