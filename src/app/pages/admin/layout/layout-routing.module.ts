import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from '../../logout/logout.component';
import { DashboardAdminComponent } from '../dashboard-admin/dashboard-admin.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
 },
 {path: '',
 component: LayoutComponent ,
 children: [
  {path: 'dashboard', component: DashboardAdminComponent},
  {path:'logout',component:LogoutComponent},
 ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
