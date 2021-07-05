import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NewsApiService{

  constructor(private _http: HttpClient) { }

  baseUrl ="https://hacker-news.firebaseio.com/v0";

  getLatestNewsIds() {
    return this._http.get(`${this.baseUrl}/newstories.json`);
  }

  getTopNewsIds() {
    return this._http.get(`${this.baseUrl}/topstories.json`);
  }

  getAskIds() {
    return this._http.get(`${this.baseUrl}/askstories.json`);
  }

  getShowIds() {
    return this._http.get(`${this.baseUrl}/showstories.json`);
  }

  getJobIds() {
    return this._http.get(`${this.baseUrl}/jobstories.json`);
  }

  getArticles(id:number) {
    return this._http.get(`${this.baseUrl}/item/${id}.json`);
  }

  getUsers(userId:any) {
    return this._http.get(`${this.baseUrl}/user/${userId}.json`);
  }
}



