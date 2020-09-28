import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './features/user/user.component';
import { UserFormModalComponent } from './features/user/user-form-modal/user-form-modal.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

import { PipesModule } from "w-ng5";
import { SortByPipe } from './pipes/sort-by.pipe';
import { InstitutionComponent } from './features/institution/institution.component';
import { MaintainedComponent } from './src/app/features/institution/maintained/maintained.component';
import { MaintainerComponent } from './src/app/features/institution/maintainer/maintainer.component';
import { CourseComponent } from './src/app/features/institution/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormModalComponent,
    UserListComponent,
    SortByPipe,
    InstitutionComponent,
    MaintainedComponent,
    MaintainerComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
