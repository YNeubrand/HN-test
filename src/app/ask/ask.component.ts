import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from "../service/news-api.service";

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  @Input() article:any;

  totalLength: any;
  page: number = 1;
  articles:any[]=[];
  articleComments:any[]=[];
  displayComments= false;
  count = 0;

  constructor(private _newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getArticles ();
  }

  getArticles(): void {
    this._newsApiService.getAskIds()
      .subscribe((response:any) => {
      response.forEach((id:any) => {
        this._newsApiService.getArticles(id)
          .subscribe((article:any) => {
            this.articles.push(article);
          });
      });
    });
  }

  getCommentsFromArticle() {
    this.article.kids.forEach(
    (kid:any) => {
      this._newsApiService.getArticles(kid)
      .subscribe((comment:any) => {
        this.articleComments.push(comment);
      })
    });
}

toggleDisplayComments() {
  this.displayComments = !this.displayComments;
  this.count++;
}

onCommentClick() {
  this.toggleDisplayComments();
  if(this.displayComments) {
    if(this.count < 2) {
    this.getCommentsFromArticle()
  }
  }
}

}
