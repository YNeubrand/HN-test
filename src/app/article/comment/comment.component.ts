import { Component, OnInit, Input } from '@angular/core';
import { NewsApiService } from "../../service/news-api.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment:any;

  kidsComments:any[]=[];

  constructor(private _newsApiService: NewsApiService) {
  }

  ngOnInit(): void {
    if(this.comment.kids) {
      this.getKidsReply();
    };
  }

  getKidsReply() {
    this.comment.kids.forEach(
      (kid:any) => {
        this._newsApiService.getArticles(kid)
        .subscribe((comment:any) => {
          this.kidsComments.push(comment);
        });
      }
    )
  }

}
