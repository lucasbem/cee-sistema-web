import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';

import { UserComponent } from './user.component';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UserListComponent } from './user-list/user-list.component';

import { SortByPipe } from './../../pipes/sort-by.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserFormModalComponent,
    UserListComponent,

    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,

    PipesModule,
  ]
})
export class UserModule { }
