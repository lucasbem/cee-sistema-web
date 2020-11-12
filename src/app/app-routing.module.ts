import { InstitutionRouting } from './features/institution/institution.routing.module';
import { CeeRouting } from './features/cee/cee.routing.module';
import { CeeComponent } from './features/cee/cee.component';
import { CeeHomeComponent } from './features/cee/cee-home/cee-home.component';
import { HomeWelcomeComponent } from './features/home/home-welcome/home-welcome.component';
import { HomeAssignmentComponent } from './features/home/home-assignment/home-assignment.component';
import { SorteadorComponent } from './features/others/sorteador/sorteador.component';
import { PermissionGuard } from './guards/permission.guard';
import { AuthGuard } from './guards/auth.guard';
import { GroupComponent } from './features/group/group.component';
import { DashboardComponent } from './features/institution/dashboard/dashboard.component';
import { AuxiliaryComponent } from './features/institution/auxiliary/auxiliary.component';
import { ProcuratorComponent } from './features/institution/procurator/procurator.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { UserComponent } from './features/user/user.component';

import { InstitutionComponent } from './features/institution/institution.component';
import { MaintainedComponent } from './features/institution/maintained/maintained.component';
import { MaintainerComponent } from './features/institution/maintainer/maintainer.component';
import { CourseComponent } from './features/institution/course/course.component';

const routes: Routes = [
  { path: "", redirectTo: "/home/boas-vindas", pathMatch: "full" },
  { path: "sorteador", component: SorteadorComponent },
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
      { path: "group", component: GroupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
