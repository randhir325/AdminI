import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-speakerform',
  templateUrl: './speakerform.component.html',
  styleUrls: ['./speakerform.component.css']
})
export class SpeakerformComponent implements OnInit {
  speakerForm: any;
  speakerForm1: any;
  id: number;
  image;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _authloginService:AuthloginService,
    private _alertify: AlertifyService) {
    if (_av.snapshot.params["id"]) {
      this.id = parseInt(_av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }

    if (this.id > 0) {
      this.rest.fetch("Speaker/Get/" + this.id).
        subscribe(res => {
          console.log(res[0]);
          debugger;
          this.speakerForm.patchValue({
            Speaker_ID:res[0].Speaker_ID,
            Speaker_name: res[0].Speaker_name,
            Speaker_designation: res[0].Speaker_designation,
            Speaker_description: res[0].Speaker_description,
            Status: res[0].Status,
            Speaker_Priority: res[0].Speaker_Priority,
          });
        });
    }
    this.speakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: ['',Validators.required,this._authloginService.userValidator()],
      Speaker_designation: ['',Validators.required],
      Speaker_description: ['',Validators.required],
      Speaker_Priority: ['',Validators.required],
      Speaker_imgae:[],
      Status: ['',Validators.required]
    });
  }


  SaveSpeakers() {
    if(this.speakerForm.valid)
    {
    this.speakerForm1 = Object.assign({}, this.speakerForm.value);
    this.rest.post('Speaker/Post', this.speakerForm1).
      subscribe(res => {
        debugger;
       // console.log(res);
        this._alertify.success("Added Successfully!");
        this.reset();
      })
    }
  }

  reset() {
    this.speakerForm.reset();
  }

  fileChange(event) {
    if (event.target.files) {
      debugger;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.speakerForm.value.Speaker_imgae = this.image;
        console.log(event.target.file);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
