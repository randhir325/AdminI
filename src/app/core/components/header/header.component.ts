import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { AuthloginService } from 'src/app/services/authlogin.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private _rest: AuthloginService) { }
  UserName: string = localStorage.getItem('Email');
  ngOnInit() {
    this.getLeftSlideMenu();
  }
  getLeftSlideMenu() {
    $(document).ready(function () {
      $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        $('#wrapper').toggleClass("open");
        e.preventDefault();
      });
    });
  }

  logout() {
    this._rest.isLogout();
    this._router.navigate(["/"]);
  }
}
