import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-policyrecommendationview',
  templateUrl: './policyrecommendationview.component.html',
  styles: []
})
export class PolicyrecommendationviewComponent implements OnInit {
  PolicyRecsData:Array<any>=[];
  id:Number=0;
  formData: FormData=new FormData();
  policyrecommendationForm:any;
  constructor(private _rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) { if (_av.snapshot.params["id"]) {
      this.id = parseInt(_av.snapshot.params["id"]);
    }}

  ngOnInit() {
    if (this.id != 0) {
      debugger;
      this._rest.fetch("PolicyRecommendation/GetPolicyRecommendationList/" + this.id).
        subscribe(res => {
         this.PolicyRecsData=res;
         console.log(this.PolicyRecsData);
        })
    }

    this.policyrecommendationForm=this.fb.group({
      PolicyRecompdf:[]
    })

  }

  handleFileInput(event) {
    debugger;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.formData.append('PolicyRecompdf', file, file.name);
      this.formData.append('PolicyRecomId', (this.id).toString());
      this._rest.post("PolicyRecommendation/SavePolicyRecommendationFile",this.formData).
      subscribe(res => {
        this._alertify.success("Added Successfully");        
      })
    }
  }

}
