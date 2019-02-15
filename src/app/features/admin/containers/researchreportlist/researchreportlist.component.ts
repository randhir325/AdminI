import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-researchreportlist',
  templateUrl: './researchreportlist.component.html',
  styles: []
})
export class ResearchreportlistComponent implements OnInit {
  rpublicationData: Array<any> = [];
  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.GetResearchReportList();
  }

  GetResearchReportList() {
    this._rest.fetch("ResearchReport/GetResearchReport").
      subscribe(res => {
        this.rpublicationData = res;
      })
  }
}
