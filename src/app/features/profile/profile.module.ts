import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from 'w-ng5';

import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormModalComponent } from './profile-form-modal/profile-form-modal.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileFormModalComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    PipesModule,
  ]
})
export class ProfileModule { }
