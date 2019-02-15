import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-keyspeakerform',
  templateUrl: './keyspeakerform.component.html',
  styleUrls: ['./keyspeakerform.component.css']
})
export class KeyspeakerformComponent implements OnInit {
  keyspeakerForm: any;
  keyspeakerForm1:any;
  image;
  id:number;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    private rest: RestService,
    private _alert: AlertifyService,
    private _router: Router,
    private _av:ActivatedRoute,
    private fb: FormBuilder
  ) { 
    if(_av.snapshot.params["id"])
    {
      this.id=parseInt(_av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }
    if(this.id>0)
    {
      this.rest.fetch("KeySpeaker/GetKeySpeakerList/"+this.id).
      subscribe(res=>{
        this.keyspeakerForm.patchValue({
          Speaker_ID:res[0].Speaker_ID,
          Speaker_name:res[0].Speaker_name,
          Speaker_type:res[0].Speaker_type,
          Speaker_designation:res[0].Speaker_designation,
          Speaker_description:res[0].Speaker_description,
          Status:res[0].Status
        })
      })
    }

    this.keyspeakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: [],
      Speaker_type: [],
      Speaker_designation: [],
      Speaker_description: [],
      Speaker_Priority: [],
      Speaker_imgae: [],
      Status: []
    });
  }

  SaveKeySpeaker() {
    this.keyspeakerForm1 = Object.assign({}, this.keyspeakerForm.value);
    this.rest.post("KeySpeaker/SaveKeySpeaker", this.keyspeakerForm1).
      subscribe(res => {
        this._alert.success("Added Successfully!");
      })
  }

  fileChange(event) {
    if (event.target.files) {
      debugger;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.keyspeakerForm.value.Speaker_imgae = this.image;
        console.log(event.target.file);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
