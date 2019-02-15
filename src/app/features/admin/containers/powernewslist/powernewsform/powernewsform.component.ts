import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-powernewsform',
  templateUrl: './powernewsform.component.html',
  styleUrls: ['./powernewsform.component.css']
})
export class PowernewsformComponent implements OnInit {
  powernewsForm: any;
  powernewsForm1: any;
  id: number;
  bsConfig: Partial<BsDatepickerConfig>;
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
    this.bsConfig = {
      containerClass: 'theme-red'
    }

    if (this.id > 0) {
      this.rest.fetch("PowerNew/GetPowerNewsList/" + this.id).
        subscribe(res => {
          this.powernewsForm.patchValue({
            NewsID: res[0].NewsID,
            NewsTitle: res[0].NewsTitle,
            NewsDescription: res[0].NewsDescription,
            NewsShortDescription: res[0].NewsShortDescription,
            NewsSource: res[0].NewsSource,
            NewsDate: res[0].NewsDate,
            NewsAuthor: res[0].NewsAuthor,
            NewsPriority: res[0].NewsPriority,
            Status: res[0].Status
          })
        })
    }

    this.powernewsForm = this.fb.group({
      NewsID: [],
      NewsTitle: [],
      NewsDescription: [],
      NewsShortDescription: [],
      NewsSource: [],
      NewsDate: [],
      NewsAuthor: [],
      NewsPriority: [],
      Status: [],
    })
  }

  SavePowerNews() {
    this.powernewsForm1 = Object.assign({}, this.powernewsForm.value);
    this.rest.post("PowerNew/SavePowerNews", this.powernewsForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }

  reset() {
    this.powernewsForm.reset();
  }

}
