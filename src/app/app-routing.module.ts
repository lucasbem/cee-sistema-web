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
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "", component: LayoutComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "institution", component: InstitutionComponent },
      {
        path: "institution", component: InstitutionComponent,
        children: [
          { path: "dashboard", component: DashboardComponent },
          { path: "maintained", component: MaintainedComponent },
          { path: "maintainer", component: MaintainerComponent },
          { path: "course", component: CourseComponent },
          { path: "procurator", component: ProcuratorComponent },
          { path: "auxiliary", component: AuxiliaryComponent },
        ]
      },
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
