import { UserService } from './user.service';
import { IUser, User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, filter, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  // public filterInputId = new FormControl();
  public filtro: string;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      this.userService.filtro = data;
    });
  }

  typeahead(elem: Element): Observable<any>{
    // const searchBox = ;

    return fromEvent(elem, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      // filter(text => text.length > 2),
      debounceTime(600),
      distinctUntilChanged()
      // switchMap(() => ajax('/api/endpoint'))
    );
  }

  edit(user: IUser | null) {
    this.userService.user = (user) ? user : new User();
  }

}
