import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.css']
})
export class ArticleformComponent implements OnInit {
  articleForm: any;
  articleForm1: any;
  articleMaster: Array<any> = [];
  articleSubMaster: Array<any> = [];
  id:number;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _av: ActivatedRoute,
    private _alertify: AlertifyService) {
      if(_av.snapshot.params["id"])
      {
        this.id=parseInt(_av.snapshot.params["id"]);
      }
     }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }
    if(this.id>0)
    {
      this.rest.fetch("Article/GetArticleDetails/"+this.id).
      subscribe(res=>{
        this.articleForm.patchValue({
          ArticleID:res[0].ArticleID,
          MasterID:res[0].MasterID,
          ArticleSubTypeID:res[0].ArticleSubTypeID,
          ArticleTitle:res[0].ArticleTitle,
          ArticleDescription:res[0].ArticleDescription,
          Source:res[0].Source,
          Author:res[0].Author,
          Status:res[0].Status,
          ArticleDate:res[0].ArticleDate,
          ArticlePriority:res[0].ArticlePriority
        })
      })
    }

    this.getArticleMaster();
    this.getArticleSubMaster();
    this.articleForm = this.fb.group({
      MasterID: [],
      ArticleSubTypeID: [],
      ArticleID: [],
      ArticleTitle: [],
      ArticleDescription: [],
      Author: [],
      Source: [],
      ArticlePriority: [],
      ArticleDate: [],
      Status: []
    })
  }


  getArticleMaster() {
    this.rest.fetch("Article/GetArticleMaster").
      subscribe(res => {
        this.articleMaster = res;
        console.log(this.articleMaster);
      })
  }

  getArticleSubMaster() {
    this.rest.fetch("Article/GetArticleSubMaster").
      subscribe(res => {
        this.articleSubMaster = res;
      })
  }

  SaveArticle() {
    this.articleForm1 = Object.assign({}, this.articleForm.value);
    this.rest.post("Article/Post/", this.articleForm1).
      subscribe(res => {
        this._alertify.success("Added Successfully");
        this.reset();
      })
  }
  reset() {
    this.articleForm.reset();
  }
}
