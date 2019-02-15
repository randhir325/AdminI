import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-researchreportcategorylist',
  templateUrl: './researchreportcategorylist.component.html',
  styles: []
})
export class ResearchreportcategorylistComponent implements OnInit {
  rrcategoryData: Array<any> = [];
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.GetResearchReportCategory()
  }

  GetResearchReportCategory() {
    this._rest.fetch("ResearchReportCategory/GetResearchReportCategoryList").
      subscribe(res => {
        this.rrcategoryData = res;
      })
  }
}
