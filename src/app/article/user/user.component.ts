import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../../service/news-api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private _newsApiService: NewsApiService,
    private _route: ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  userInfo:any[]=[];

  getUser(id:any) {
    this._newsApiService.getUsers(id)
    .subscribe((result:any) => {
      this.userInfo.push(result);
    });
  }

  time(unixtime:number) {
    const dateTime = new Date(unixtime * 1000);
    const year = dateTime.getFullYear();
    const date = dateTime.getDate();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const monthIndex = dateTime.getMonth();
    const monthName = months[monthIndex];
    const formatted = `${date} ${monthName} ${year}`
    return formatted;
  }
}
