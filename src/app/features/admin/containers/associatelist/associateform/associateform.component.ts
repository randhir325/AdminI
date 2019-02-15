import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-associateform',
  templateUrl: './associateform.component.html',
  styles: []
})
export class AssociateformComponent implements OnInit {
  associateForm: any;
  associateCategory: Array<any> = [];
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
    this.getAssociateCategoryList();
    if (this.id > 0) {
      this.rest.fetch("Associate/GetAssociateList/" + this.id).
        subscribe(res => {
          this.associateForm.patchValue({
            categoryid: res[0].categoryid,
            AssociateName: res[0].AssociateName,
            AssociateID: res[0].AssociateID,
            AssociateUrl: res[0].AssociateUrl,
            Status: res[0].Status
          })
        console.log(this.associateForm.value);
        })
    }
    this.associateForm = this.fb.group({
      AssociateID:[],
      categoryid: [],
      AssociateName: [],
      AssociateUrl: [],
      Status: []
    });
  }

  getAssociateCategoryList() {
    debugger;
    this.rest.fetch("AssociatesCategory/GetAssociatesCategoryList").
      subscribe(res => {
        this.associateCategory = res;
        console.log(this.associateCategory);
      })
  }
  SaveAssociate() {
    debugger;
    this.rest.post("Associate/SaveAssociate", this.associateForm.value)
      .subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.associateForm.reset();
  }

}
