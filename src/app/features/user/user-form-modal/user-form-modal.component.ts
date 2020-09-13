import { StatusEnum } from './../../../interfaces/Status';
import { IProfile } from './../../../interfaces/Profile';
import { ProfileService } from './../../../services/profile.service';
import { UserService } from './../user.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IUser, User, GenderEnum } from './../../../interfaces/User';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.less']
})
export class UserFormModalComponent implements OnInit {

  x: IUser;
  user: IUser;
  profileList: IProfile[];
  statusList: string[];
  genderList: string[];

  constructor(
    private userService: UserService,
    public profileService: ProfileService,
    private router: Router
  ) {
    this.reloadComponent()
  }

  reloadComponent() {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.x = new User();
    this.statusList = Object.values(StatusEnum)
    this.genderList = Object.values(GenderEnum)
  }

  createUser(): void {
    this.userService.create(this.x).subscribe(() => {
      this.userService.index();
    });
  }

  updateUser(): void {
    this.userService.update(this.x).subscribe(() => {
      this.userService.index();
    });
  }

}
