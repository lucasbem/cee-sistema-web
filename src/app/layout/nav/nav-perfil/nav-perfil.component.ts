import { UserService } from './../../../features/user/user.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-perfil',
  templateUrl: './nav-perfil.component.html',
  styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

  profileIndex: number = 0;

  constructor(public profileService: ProfileService, public userService: UserService) { }

  ngOnInit(): void {
  }

  change(idx: any){
    console.log(idx)
  }

}
