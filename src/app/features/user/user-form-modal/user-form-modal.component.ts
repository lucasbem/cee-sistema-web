import { IProfile } from './../../../interfaces/Profile';
import { ProfileService } from './../../../services/profile.service';
import { UserService } from './../user.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IUser, User } from './../../../interfaces/User';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.less']
})
export class UserFormModalComponent implements OnInit, OnChanges {

  x: IUser = new User();
  profileList: IProfile[];
  user: IUser;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileService.read().subscribe((profiles)=>{
      this.profileList = profiles
    });
    // this.reloadComponent()
    console.log(this.x)
    console.log(this.profileService.profiles)
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
        // window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.profileList.currentValue)
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.router.navigate(["/user"]);
    });
  }
  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
    });
  }

}
