import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {
  articleData: Array<any> = [];
  constructor(private _router: Router,
    private _rest: RestService) { }

  ngOnInit() {
    this.getArticleList()
  }

  getArticleList() {
    this._rest.fetch("Article/GetArticle").
      subscribe(res => {
        this.articleData = res;
        console.log(this.articleData);
      })
  }
}
