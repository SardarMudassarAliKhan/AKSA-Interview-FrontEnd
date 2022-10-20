import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authencation/login/login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { DepartmentsComponent } from './Departments/departments/departments.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowEmployeeComponent } from './Employee/show-employee/show-employee.component';
import { AddEditEmployeeComponent } from './Employee/add-edit-employee/add-edit-employee.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { ShowDepartmentComponent } from './Departments/show-department/show-department.component';
import { AddEditDepartmentComponent } from './Departments/add-edit-department/add-edit-department.component';
@NgModule({
  declarations: [
    AppComponent,
    //AdminComponentComponent,
    LoginComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    DepartmentsComponent,
    ShowEmployeeComponent,
    AddEditEmployeeComponent,
    EmployeeComponent,
    ShowDepartmentComponent,
    AddEditDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
