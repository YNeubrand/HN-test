import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../../service/news-api.service';

@Component({
  selector: 'app-ask-post',
  templateUrl: './ask-post.component.html',
  styleUrls: ['./ask-post.component.css']
})
export class AskPostComponent implements OnInit {

  post:any[]=[];
  dateTime:any;
  articleComments:any[]=[];

  constructor(
    private _newsApiService: NewsApiService,
    private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this._route.snapshot.paramMap.get('id');
      this.getPost(id);
    }

    getPost(id:any){
      this._newsApiService.getArticles(id)
      .subscribe((post) => {
        this.post.push(post);
        this.post.forEach((val:any) => {
          if(val.kids) {
            val.kids.forEach(
            (kid:any) => {
              this._newsApiService.getArticles(kid)
              .subscribe((comment:any) => {
                this.articleComments.push(comment);
              })
            });
          }
        });
      })
    }

    getTime(time:any) {
      this.dateTime = new Date(time * 1000);
    }

}
