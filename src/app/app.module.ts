import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {PostResolverService} from './services/post-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}}, //resolve показывает компонент, когда получили данные, как OnInit
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    HelloComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
