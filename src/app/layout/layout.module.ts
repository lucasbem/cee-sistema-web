import { AuthModule } from './../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NavPerfilComponent } from './nav/nav-perfil/nav-perfil.component';
import { AppRoutingModule } from './../app-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TopComponent } from './top/top.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLogoComponent } from './nav/nav-logo/nav-logo.component';
import { NavMenuComponent } from './nav/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopComponent,
    NavComponent,
    NavPerfilComponent,
    FooterComponent,
    NavLogoComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    AuthModule
  ]
})
export class LayoutModule { }
