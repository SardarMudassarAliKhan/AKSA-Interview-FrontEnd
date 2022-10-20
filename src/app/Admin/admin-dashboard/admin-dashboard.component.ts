import { EmployeeService } from './../../Employee/employee.service';
import { Employee } from './../../../Models/Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public userlist:Employee[] =[];
  constructor(private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    debugger
    this.EmployeeService.getallData().subscribe((data:any)=>
    {
     this.userlist= data;
    });
  }
}

