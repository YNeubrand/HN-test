import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestNewsComponent } from "./latest-news/latest-news.component";
import { SubmissionComponent } from "./article/user/submission/submission.component";
import { TopNewsComponent } from "./top-news/top-news.component";
import { UserCommentComponent } from "./article/user/user-comment/user-comment.component";
import { ShowComponent } from "./show/show.component";
import { AskComponent } from "./ask/ask.component";
import { AskPostComponent } from "./ask/ask-post/ask-post.component";
import { JobComponent } from "./job/job.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LatestNewsComponent
  },
  { path: 'top-news', component: TopNewsComponent },
  { path: 'ask', component: AskComponent },
  { path: 'submission/:id', component: SubmissionComponent },
  { path: 'user-comment/:id', component: UserCommentComponent },
  { path:'show', component: ShowComponent },
  { path: 'ask-post/:id', component: AskPostComponent },
  { path: 'job', component: JobComponent},
  {
    path: 'user/:id',
    loadChildren: () => import('./article/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
