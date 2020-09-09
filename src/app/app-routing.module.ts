import { HomeComponent } from './features/home/home.component';
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { LayoutComponent } from './layout/layout.component';

 const routes: Routes = [
   { path: "", redirectTo: "/home", pathMatch: "full" },
   {
     path: "",
     component: LayoutComponent,
     children: [
       { path: "home", component: HomeComponent },
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
