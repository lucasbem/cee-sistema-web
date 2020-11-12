import { CeeComponent } from './cee.component';
import { CeeHomeComponent } from './cee-home/cee-home.component';

export const CeeRouting = {
  path: "cee", component: CeeComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    { path: "home", component: CeeHomeComponent },
    // { path: "dashboard", component: DashboardComponent },
    // { path: "process", component: MaintainedComponent },
    // { path: "institution", component: MaintainerComponent },
    // { path: "instrument", component: ProcuratorComponent, canActivate: [AuthGuard, PermissionGuard] },
  ]
}
