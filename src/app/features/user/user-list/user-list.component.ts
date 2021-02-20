import { NotificationService } from './../../../services/notification.service';
import _cloneDeep from "lodash/cloneDeep";

import { IUser, User } from './../../../interfaces/User';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

    // userList: IUser[]
    // filtro: string;

    constructor(
        public userService: UserService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void { this.index() }

    index(): void {
        this.userService.index();
    }

    delete(id): void {
        if(!this.userService.isConfirm()) return;
        this.userService.default(this.userService.delete(id));
    }

}
