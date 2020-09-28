import { StatusEnum } from './../../../interfaces/Status';
import { GenderEnum } from './../../../interfaces/User';
import { UserService } from './../user.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.less']
})
export class UserFormModalComponent implements OnInit {

  statusList: string[];
  genderList: string[];

  constructor(
    public userService: UserService,
    public profileService: ProfileService,
    private router: Router
  ) {
    // this.reloadComponent()
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
    // this.x = this.userService.user || new User();
    this.statusList = Object.values(StatusEnum)
    this.genderList = Object.values(GenderEnum)
  }

  create(): void {
    this.userService.create(this.userService.user).subscribe(() => {
      this.userService.index();
    });
  }

  update(): void {
    this.userService.update(this.userService.user).subscribe(() => {
      this.userService.index();
    });
  }

}
