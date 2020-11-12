import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthListModalComponent } from './auth-list-modal/auth-list-modal.component';
import { AuthProfileModalComponent } from './auth-profile-modal/auth-profile-modal.component';



@NgModule({
  declarations: [
    AuthComponent,
    AuthListModalComponent,
    AuthProfileModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent,
    AuthListModalComponent,
    AuthProfileModalComponent
  ]
})
export class AuthModule { }
