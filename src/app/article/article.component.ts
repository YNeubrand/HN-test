import { Component, OnInit, Input } from '@angular/core';
import { NewsApiService } from "../service/news-api.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:any;

  articleComments:any[]=[];
  displayComments= false;
  count = 0;

  constructor(private _newsApiService: NewsApiService) { }

  ngOnInit(): void {
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
