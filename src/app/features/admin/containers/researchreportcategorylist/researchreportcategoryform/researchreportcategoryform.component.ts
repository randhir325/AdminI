import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-researchreportcategoryform',
  templateUrl: './researchreportcategoryform.component.html',
  styles: []
})
export class ResearchreportcategoryformComponent implements OnInit {
  rrcForm: any;
  rrcForm1: any;
  id: number;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private _rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
    if (_av.snapshot.params["id"]) {
      this.id = parseInt(_av.snapshot.params["id"]);
    }
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }
    if (this.id != 0) {
      this._rest.fetch("ResearchReportCategory/GetResearchReportCategoryList/" + this.id).
        subscribe(res => {
          this.rrcForm.patchValue({
            categoryID: res[0].categoryID,
            categegoryName: res[0].categegoryName,
            categoryPriority: res[0].categoryPriority,
            status: res[0].status,
          })
        })
    }
    this.rrcForm = this.fb.group({
      categoryID: [],
      categegoryName: [],
      categoryPriority: [],
      status: []
    })
  }

  SaveResearchPublicationsCategory() {
    this.rrcForm1 = Object.assign({}, this.rrcForm.value);
    this._rest.post("ResearchReportCategory/SaveResearchReportCategory", this.rrcForm1).
      subscribe(res => {
        this._alertify.success("Added Sucessfully");
        this.reset()
      })
  }

  reset() {
    this.rrcForm.reset();
  }

}
