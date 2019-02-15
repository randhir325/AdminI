import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { resetComponentState } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.css']
})
export class MemberformComponent implements OnInit {
  memberForm: any;
  id: number;
  image;
  constructor(private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
      if(_av.snapshot.params["id"])
      {
        this.id=parseInt(_av.snapshot.params["id"]);
      }
     }

  ngOnInit() {
    if(this.id>0)
    {
      this.rest.fetch("Member/GetMemberList/"+this.id).
      subscribe(res=>{
        this.memberForm.patchValue({
          MemberID:res[0].MemberID,
          MemberName:res[0].MemberName,
          MemberLink:res[0].MemberLink,
          Status:res[0].Status
        })
      })
    }
    this.memberForm = this.fb.group({
      MemberID: [],
      MemberName: [],
      MemberLink: [],
      Status: [],
      MemberImage: []
    })
  }


  SaveMember() {
    this.rest.post("Member/SaveMember", this.memberForm.value).
      subscribe(res => {
        this._alertify.success("Added Successfully!");
        this.reset();
      })
  }

  reset() {
    this.memberForm.reset();
  }
  fileChange(event) {
    if (event.target.files) {
      debugger;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.memberForm.value.Speaker_imgae = this.image;
        console.log(event.target.file);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
