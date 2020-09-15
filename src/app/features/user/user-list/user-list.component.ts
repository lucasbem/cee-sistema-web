
import { IUser, User } from './../../../interfaces/User';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  // userList: IUser[]
  // filtro: string;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  index(): void {
    this.userService.index();
  }

  edit(user: IUser | null){
    this.userService.user = (user) ? user : new User();
  }

  delete(id): void {
    this.userService.delete(id).subscribe((data) => {
      this.userService.index();
    })
  }

}
