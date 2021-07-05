import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../../../service/news-api.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})

export class SubmissionComponent implements OnInit {

  articles:any[]=[];
  totalLength: any;
  page: number = 1;
  userInfo:any[]=[];
  submissions:any[]=[];

  constructor(
    private _newsApiService: NewsApiService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id:any) {
    this._newsApiService.getUsers(id)
    .subscribe((result:any) => {
      result.submitted.forEach((sub:any) => {
        this._newsApiService.getArticles(sub)
        .subscribe((val:any) => {
          this.articles.push(val);
        })
      });
    });
  };
}
