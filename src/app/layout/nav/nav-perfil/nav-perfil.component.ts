import { NotificationService } from './../../../services/notification.service';
import { AuthService } from './../../../auth/auth.service';
import { UserService } from './../../../features/user/user.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-perfil',
    templateUrl: './nav-perfil.component.html',
    styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

    AuthService = AuthService;

    profileIndex: number = 0;
    firstName = /(.*?) .*/
    lastName = /.* (\w*)/

    constructor(
        public authService: AuthService,
        public profileService: ProfileService,
        public userService: UserService,
        private notify: NotificationService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logOut(): void {
        this.authService.logout(AuthService.user._id).subscribe((data) => {
            AuthService.init();
            this.router.navigate(['/']);
            this.notify.showSuccess(data[1], "Sucesso!");
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }

}
