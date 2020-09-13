import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-perfil',
  templateUrl: './nav-perfil.component.html',
  styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

}
