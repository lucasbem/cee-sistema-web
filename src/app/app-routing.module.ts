import { UserComponent } from './features/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
      path: "user",
      component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
