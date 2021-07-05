import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from "../service/news-api.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() article:any;

  totalLength: any;
  page: number = 1;
  articles:any[]=[];

  constructor(private _newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getArticles ();
  }

  getArticles(): void {
    this._newsApiService.getJobIds()
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
