import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../service/news-api.service";

  @Component({
    selector: 'app-top-news',
    templateUrl: './top-news.component.html',
    styleUrls: ['./top-news.component.css']
  })

  export class TopNewsComponent implements OnInit {

    totalLength: any;
    page: number = 1;
    articles:any[]=[];
    ids:any;

    constructor(private _newsApiService: NewsApiService) {}

    ngOnInit(): void {
      this.function ();
    }

    function(): void {
      this._newsApiService.getTopNewsIds()
        .subscribe(response => {
        this.ids = response;
        for(let id of this.ids) {
      this._newsApiService.getArticles(id)
        .subscribe(article => {
        this.articles.push(article);
        });
      }
    });
  }
  }
