import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HomeWelcomeComponent } from './features/home/home-welcome/home-welcome.component';
import { HomeAssignmentComponent } from './features/home/home-assignment/home-assignment.component';
import { SorteadorComponent } from './features/others/sorteador/sorteador.component';

import { InstitutionRouting } from './features/institution/institution.routing.module';
import { CeeRouting } from './features/cee/cee.routing.module';
import { SorteadorRouting } from './features/others/sorteador/sorteador-routing.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { UserComponent } from './features/user/user.component';

const routes: Routes = [
  // { path: "", redirectTo: "/home/boas-vindas", pathMatch: "full" },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  SorteadorRouting,
  { path: "sorteador", component: SorteadorComponent },
  { path: "login", component: AuthComponent },
  {
    path: "", component: LayoutComponent, children: [
      { path: "home", redirectTo: "/home/boas-vindas", pathMatch: "full" },
      {
        path: "home", component: HomeComponent,
        children: [
          { path: "boas-vindas", component: HomeWelcomeComponent },
          { path: "atribuicoes", component: HomeAssignmentComponent }
        ]
      },
      CeeRouting,
      InstitutionRouting,
      // {
      //   path: "institution", component: InstitutionComponent,
      //   // canActivate: [AuthGuard, PermissionGuard],
      //   children: [
      //     { path: "dashboard", component: DashboardComponent },
      //     { path: "maintained", component: MaintainedComponent },
      //     { path: "maintainer", component: MaintainerComponent },
      //     { path: "course", component: CourseComponent, canActivate: [AuthGuard, PermissionGuard] },
      //     { path: "procurator", component: ProcuratorComponent },
      //     { path: "auxiliary", component: AuxiliaryComponent },
      //   ]
      // },
      // {
      //   path: "cee", component: CeeComponent,
      //   // canActivate: [AuthGuard, PermissionGuard],
      //   children: [
      //     { path: "home", component: CeeHomeComponent },
      //     // { path: "dashboard", component: DashboardComponent },
      //     // { path: "process", component: MaintainedComponent },
      //     // { path: "institution", component: MaintainerComponent },
      //     // { path: "instrument", component: ProcuratorComponent, canActivate: [AuthGuard, PermissionGuard] },
      //   ]
      // },
      { path: "user", component: UserComponent },
      { path: "profile", component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { onSameUrlNavigation: 'reload' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
