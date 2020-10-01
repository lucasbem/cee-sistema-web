import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthListModalComponent } from './auth-list-modal/auth-list-modal.component';



@NgModule({
  declarations: [
    AuthComponent,
    AuthListModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent,
    AuthListModalComponent
  ]
})
export class AuthModule { }
