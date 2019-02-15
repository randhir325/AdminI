import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, BsDatepickerConfig } from 'ngx-bootstrap';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthloginService } from 'src/app/services/authlogin.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Speakers } from 'src/app/features/admin/models/speakers';


@Component({
  selector: 'app-speakerdetails',
  templateUrl: './speakerdetails.component.html',
  styles: []
})
export class SpeakerdetailsComponent implements OnInit {
  speakers: Speakers;
  speakerForm1:FormGroup;
  speakerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private bsModalRef: BsModalRef,
    private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _authloginService: AuthloginService,
    private _alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }
    this.getInitilizationFrom();
    this.getSpeakerValue();
    
    console.log(this.speakers);
  }

  getInitilizationFrom()
  {
    this.speakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: [],
      Speaker_designation:[],
      Speaker_description:[],
      Speaker_Priority: [],      
      Status: []
    });
  }

  getSpeakerValue()
  {
    this.speakerForm.patchValue({
      Speaker_ID:this.speakers.Speaker_ID,
            Speaker_name: this.speakers.Speaker_name,
            Speaker_designation: this.speakers.Speaker_designation,
            Speaker_description: this.speakers.Speaker_description,
            Status: this.speakers.Status,
            Speaker_Priority: this.speakers.Speaker_Priority,
    });
  }

  SaveSpeaker() {
    if(this.speakerForm.valid)
    {
      debugger
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

}
