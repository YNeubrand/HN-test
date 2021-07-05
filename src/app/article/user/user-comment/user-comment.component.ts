import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from "../../../service/news-api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  @Input() comment:any;

  id = this._route.snapshot.paramMap.get('id');
  filtered:any[]=[];
  articleComments:any[]=[];

  constructor(
    private _newsApiService: NewsApiService,
    private _route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.getArticles()
    }

    getArticles() {
      this._newsApiService.getLatestNewsIds()
      .subscribe((ids:any) => {
        ids.forEach((id:any) => {
          this._newsApiService.getArticles(id)
          .subscribe((article:any) => {
            if(article.kids) {
            article.kids.forEach(
              (kid:any) => {
                this._newsApiService.getArticles(kid)
                .subscribe((comment:any) => {
                      this.articleComments.push(comment);
                })
              });
            }
          })
        });
      });
    }

}
