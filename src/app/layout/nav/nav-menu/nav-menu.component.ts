import { AuthService } from './../../../auth/auth.service';
import { UserService } from './../../../features/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent implements OnInit {

  AuthService = AuthService;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  isPermitted(rep: string): boolean {

    return (rep === "cee")
      ? ["Técnico", "Administrador", "Gerente"].includes(AuthService.currentProfile.name)
      : (rep === "institution")
        ? ["Auxiliar", "Procurador"].includes(AuthService.currentProfile.name)
        : (rep === "commission")
          ? ["Membro"].includes(AuthService.currentProfile.name)
          : (rep === "manager")
            ? ["Administrador", "Gerente"].includes(AuthService.currentProfile.name)
          : (rep === "anonimous")
            ? ["Anônimo"].includes(AuthService.currentProfile.name)
            : false
  }

}
