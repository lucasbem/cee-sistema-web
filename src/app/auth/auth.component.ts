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
  public username: string = "1234567890"
  public password: string = "1234567890"

  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataAccess = { username: this.username, password: this.password }
    this.authService.login(this.dataAccess).subscribe((data) => {
      if (data._id) {
        AuthService.user = data;
        sessionStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(['/home'])
      }
      else
        this.notifyService.showWarning(data[1], "Ops!");
    });
  }

}
