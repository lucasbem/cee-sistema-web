import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.less']
})
export class UserFormModalComponent implements OnInit {

  user: IUser = {
    level: "asldkfj",
    name: "Lulu"
  };

  constructor(private userService: UserService, private router: Router) {

    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
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
  }

  createUser(): void{
    this.userService.create(this.user).subscribe(()=>{
      this.router.navigate(["/user"]);
    });
  }
  updateUser(): void{
    this.userService.update(this.user).subscribe(()=>{
    });
  }

}
