import { IUser } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  userList: IUser[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.index();
  }

  index(): void{
    this.userService.read().subscribe((users)=>{
      this.userList = users;
    });
  }

  delete(id): void {
    this.userService.delete(id).subscribe(()=>{
      this.router.navigate(["/user"]);
    })
  }

}
