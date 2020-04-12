import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../models/UserModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private activatedRoute: ActivatedRoute) { //объект activatedRoute держит в себе информацию о маршрутах
    // console.log(this.activatedRoute.snapshot.data);
    // this.users = this.activatedRoute.snapshot.data as UserModel[]; приведення типов, то же, что и строка ниже
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit(): void {
  }

}
