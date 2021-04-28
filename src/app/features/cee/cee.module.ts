import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeeHomeComponent } from './cee-home/cee-home.component';
import { CeeComponent } from './cee.component';
import { CeeUserComponent } from './cee-user/cee-user.component';



@NgModule({
  declarations: [
    CeeHomeComponent,
    CeeComponent,
    CeeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CeeModule { }
