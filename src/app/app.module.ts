/*ANGULAR*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*FEATURES*/
import { AuthModule } from './auth/auth.module';
import { CeeModule } from './features/cee/cee.module';
import { HomeModule } from './features/home/home.module';
import { InstitutionModule } from './features/institution/institution.module';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './features/user/user.module';
import { SorteadorModule } from './features/others/sorteador/sorteador.module';
import { CeeRhComponent } from './features/cee-rh/cee-rh.component';

/*OTHERS*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*ANGULAR*/
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    /*FEATURES*/
    AuthModule,
    CeeModule,
    HomeModule,
    LayoutModule,
    UserModule,
    InstitutionModule,
    SorteadorModule

    /*OTHERS*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
