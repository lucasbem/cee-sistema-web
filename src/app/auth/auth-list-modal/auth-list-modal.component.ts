import { IUser, User } from './../../interfaces/User';
import { UserService } from './../../features/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-list-modal',
  templateUrl: './auth-list-modal.component.html',
  styleUrls: ['./auth-list-modal.component.less']
})
export class AuthListModalComponent implements OnInit {

  userList: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe((users)=>{
      this.userList = users;
    });
  }

  login(user: IUser): void {
    this.userService.user = this.userService.users.find(  e=> e.id == user.id) || new User();
  }

}
