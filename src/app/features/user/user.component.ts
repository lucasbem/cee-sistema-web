import { UserService } from './user.service';
import { IUser, User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  userList: IUser[]
  // filtro: string;

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  edit(user: IUser | null){
    this.userService.user = (user) ? user : new User();
  }

}
