import { LoginComponent } from './Authencation/login/login.component';
import { DepartmentsComponent } from './Departments/departments/departments.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
  { path: 'AdminDashboard', component: AdminDashboardComponent },
  { path: 'Departments', component: DepartmentsComponent },
  { path:'*',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
