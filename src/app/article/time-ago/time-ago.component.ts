import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['./time-ago.component.css']
})
export class TimeAgoComponent implements OnInit {
  @Input() public time:any;

  timeAgo(time:number) :any | void {
    var ts = Math.floor((new Date()).getTime() / 1000);
    let seconds = ts - time;

    if(seconds >= 604800 ){
      return "more than a week ago";
    }
    if(seconds < 604800 && seconds >= 345600) {
        return "less than a week ago";
    }
    if(seconds < 345600 && seconds >= 259200) {
      return "3 days ago";
    }
    if(seconds < 259200 && seconds >= 172800) {
      return "2 days ago";
    }
    if(seconds < 172800 && seconds >= 90000) {
      return "a day ago";
    }
    if(seconds < 90000 && seconds >= 7200) {
      return `${Math.floor(seconds/3600)} hours ago`;
    }
    if(seconds < 7200 && seconds >= 3600) {
      let hourMin = Math.floor((seconds-3600)/60);
      if(hourMin ===0 ){
        return "an hour ago"
      }
      else {
        return `an hour and ${hourMin} minutes ago`;
      }
    }
    if(seconds < 3600 && seconds >= 120) {
      return `${Math.floor(seconds/60)} minutes ago`;
    }
    if(seconds < 120 && seconds >= 60) {
      return "a minute ago";
    }
    if(seconds < 60){
      return "less than a minute ago";
    }
    if(seconds < 0) {
      return null;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
