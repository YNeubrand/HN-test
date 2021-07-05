import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NewsApiService } from "./service/news-api.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ArticleComponent } from './article/article.component';
import { GetHostNameComponent } from './article/get-host-name/get-host-name.component';
import { TimeAgoComponent } from './article/time-ago/time-ago.component';
import { CommentComponent } from './article/comment/comment.component';
import { SubmissionComponent } from "./article/user/submission/submission.component";
import { TopNewsComponent } from "./top-news/top-news.component";
import { UserCommentComponent } from "./article/user/user-comment/user-comment.component";
import { ShowComponent } from './show/show.component';
import { AskComponent } from "./ask/ask.component";
import { AskPostComponent } from "./ask/ask-post/ask-post.component";
import { JobComponent } from "./job/job.component";

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    ArticleComponent,
    GetHostNameComponent,
    TimeAgoComponent,
    CommentComponent,
    SubmissionComponent,
    TopNewsComponent,
    UserCommentComponent,
    ShowComponent,
    AskComponent,
    AskPostComponent,
    JobComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
