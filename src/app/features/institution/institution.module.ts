import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';

import { MaintainerComponent } from './maintainer/maintainer.component';
import { MaintainedComponent } from './maintained/maintained.component';
import { CourseComponent } from './course/course.component';
import { InstitutionComponent } from './institution.component';

@NgModule({
  declarations: [
    InstitutionComponent,
    CourseComponent,
    MaintainedComponent,
    MaintainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class InstitutionModule { }
