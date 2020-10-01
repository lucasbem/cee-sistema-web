import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './features/user/user.module';
import { InstitutionModule } from './features/institution/institution.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    AuthModule,
    LayoutModule,
    UserModule,
    InstitutionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
