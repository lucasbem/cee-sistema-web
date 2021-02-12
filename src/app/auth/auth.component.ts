import { NotificationService } from './../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { IUserDataLogin } from './../features/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  public dataAccess: IUserDataLogin;
  public username: string
  public password: string

  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataAccess = { username: this.username, password: this.password }
    this.authService.login(this.dataAccess).subscribe((data) => {
      console.info(data) //! APAGAR
      if (data._id) {
        AuthService.user = data;
        this.router.navigate(['/home'])
      }
      else
        this.notifyService.showWarning(data[1], "Warning");
    });
  }

}
