import { UserService } from './../../../features/user/user.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-nav-perfil',
  templateUrl: './nav-perfil.component.html',
  styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

  profileIndex: number = 0;
  firstName = /(.*?) .*/
  lastName = /.* (\w*)/

  constructor(public profileService: ProfileService, public userService: UserService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.userService.user = new User();
  }

  change(idx: any){
    console.log(idx)
  }

}
