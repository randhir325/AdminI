import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, Form, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthloginService } from 'src/app/services/authlogin.service';
import { ConfirmPasswordValidator } from 'src/app/shared/ConfirmPasswordValidator';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm: any;
  // CheckData = ['Randhir', 'Shiv', 'Jitu'];
  // ArrayValue = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  // shouldSayHello: boolean = true;
 // htmlSnippet =  `<b>This text is bold</b> and this one is <i>italics</i> <img src=x onerror='alert("hello there")'>`;
  constructor(private _rest: AuthloginService,
    private fb: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    // console.log(this.CheckData);
    // debugger;
    // let SortArray1 = this.ArrayValue.sort();
    // let totalZero = SortArray1.lastIndexOf(0);


    // let FirstArray = SortArray1.slice(0, totalZero + 1);
    // let SecondArray = SortArray1.slice(totalZero + 1);
    // console.log(SortArray1);
    // console.log(totalZero);

    // console.log(FirstArray);
    // console.log(SecondArray);

    this.loginForm = this.fb.group({
     // UserName: ['', Validators.required],
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
      //confirmPassword:['',Validators.required]
    }
    // , {
    //   validator: ConfirmPasswordValidator.MatchPassword
 
    // }
    )
  }  


  Login() {
    if (this.loginForm.valid) {
      debugger;
      this._rest.Login(this.loginForm.value).
        subscribe((res: any) => {
          debugger;
          if (this._rest.isAuthenticated() != null) {

            this._router.navigate(["/admin"]);
          }
          else {
            this._router.navigate(["/"]);
          }
          // console.log(res.Email);
          // localStorage.setItem("authToken", res.token);


        },
          error => {
            throw error;
          }
        );
    }
  }
}
