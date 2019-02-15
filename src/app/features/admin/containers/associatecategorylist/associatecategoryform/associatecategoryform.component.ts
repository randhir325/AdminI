import { Component, OnInit } from '@angular/core';

import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-associatecategoryform',
  templateUrl: './associatecategoryform.component.html',
  styles: []
})
export class AssociatecategoryformComponent implements OnInit {
  associatecategoryForm: any;
  id: number;
  
  constructor(private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
    if (this._av.snapshot.params["id"]) {
      this.id = parseInt(this._av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    
    if (this.id > 0) {
      this.rest.fetch("AssociatesCategory/GetAssociatesCategoryList").
        subscribe(res => {
          this.associatecategoryForm.patchValue({
            categoryid: res[0].categoryid,
            categoryname: res[0].categoryname,
            status: res[0].status
          })
        })
    }
    this.associatecategoryForm = this.fb.group({
      categoryid: [],
      categoryname: [],
      status: []
    })
  }

  SaveAssociateCategory() {        
    this.rest.post("AssociatesCategory/SaveAssociatesCategory", this.associatecategoryForm.value).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.associatecategoryForm.reset();
  }

}
