import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-host-name',
  templateUrl: './get-host-name.component.html',
  styleUrls: ['./get-host-name.component.css']
})
export class GetHostNameComponent implements OnInit {
  @Input() public url:any;

  getHostNameFromURL(url:string) {
      try {
          const u = new URL(url);
          return u.hostname;
      } catch(err) {
          return null;
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
