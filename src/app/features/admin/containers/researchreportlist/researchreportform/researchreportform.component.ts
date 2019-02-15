import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-researchreportform',
  templateUrl: './researchreportform.component.html',
  styles: []
})
export class ResearchreportformComponent implements OnInit {
  publicationForm: any;
  publicationForm1: any;
  id: number;
  researchCatecory: Array<any> = [];
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
      this._rest.fetch("ResearchReport/GetResearchReportList/" + this.id).
        subscribe(res => {
          this.publicationForm.patchValue({
            ResearchReportID: res[0].ResearchReportID,
            categoryID: res[0].categoryID,
            ReportYear: res[0].ReportYear,
            ResearchReportTitle: res[0].ResearchReportTitle,
            ResearchReportShortDetails: res[0].ResearchReportShortDetails,
            ResearchReportDetails: res[0].ResearchReportDetails,
            PriorityDate: res[0].PriorityDate,
            status: res[0].status
          })
        })
    }
    this.GetResearchReportCategotyList();
    this.publicationForm = this.fb.group({
      ResearchReportID: [],
      categoryID: [],
      ReportYear: [],
      ResearchReportTitle: [],
      ResearchReportShortDetails: [],
      ResearchReportDetails: [],
      PriorityDate: [],
      status: []
    })
  }


  GetResearchReportCategotyList() {
    this._rest.fetch("ResearchReportCategory/GetResearchReportCategoryList").
      subscribe(res => {
        this.researchCatecory = res;
      })
  }

  SavePublication() {
    this.publicationForm1 = Object.assign({}, this.publicationForm.value);
    this._rest.post("ResearchReport/SaveResearchReport", this.publicationForm1).
      subscribe(res => {
        this._alertify.message("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.publicationForm.reset();
  }
}
