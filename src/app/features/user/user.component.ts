import { UserService } from './user.service';
import { IUser } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  userList: IUser[]

  constructor(private userService: UserService) {
    this.userList = userService.users;
  }

  ngOnInit(): void {
  }

  edit(user: IUser){}

}
