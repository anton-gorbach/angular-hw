import {Component} from '@angular/core';import {UserModel} from '../models/UserModel';import {UserService} from './services/user.service';import {PostModel} from '../models/PostModel';import {PostService} from './services/post.service';import {CommentModel} from '../models/CommentModel';import {CommentService} from './services/comment.service';@Component({  selector: 'app-root',  templateUrl: './app.component.html',  styleUrls: ['./app.component.css']})export class AppComponent {  msg = 'Angular HW2 More Components';  users: UserModel[];  posts: PostModel[];  comments: CommentModel[];  constructor(      private userService: UserService,      private postService: PostService,      private commentService: CommentService,    ) { // создаем объект userService ; private - инкапсуляция    this.greeting();    this.userService.getUsers().subscribe(value => this.users = value);    this.postService.getPosts().subscribe(value => this.posts = value);    this.commentService.getComments().subscribe(value => this.comments = value);  }  greeting() {    console.log('hello');  }}