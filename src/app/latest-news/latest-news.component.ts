import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../service/news-api.service";

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  articles:any[]=[];

  constructor(private _newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getArticles ();
  }

  getArticles(): void {
    this._newsApiService.getLatestNewsIds()
      .subscribe((response:any) => {
      response.forEach((id:any) => {
        this._newsApiService.getArticles(id)
          .subscribe((article:any) => {
            this.articles.push(article);
          });
      });
    });
  }
}
