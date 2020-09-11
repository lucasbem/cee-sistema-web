import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopComponent } from './layout/top/top.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserComponent } from './features/user/user.component';
import { UserFormModalComponent } from './features/user/user-form-modal/user-form-modal.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormModalComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
