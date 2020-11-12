import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeeHomeComponent } from './cee-home/cee-home.component';
import { CeeComponent } from './cee.component';



@NgModule({
  declarations: [
    CeeHomeComponent,
    CeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CeeModule { }
