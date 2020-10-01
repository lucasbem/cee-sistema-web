import { MaintainerComponent } from './maintainer/maintainer.component';
import { MaintainedComponent } from './maintained/maintained.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CourseComponent,
    MaintainedComponent,
    MaintainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstitutionModule { }
