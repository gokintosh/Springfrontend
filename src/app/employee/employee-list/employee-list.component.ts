import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Observable<ApiResponse>;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employees=this.employeeService.getEmployees();
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{
        console.log(data);
        this.employees=this.employeeService.getEmployees();
    },
    error=>console.error(error));
    

    
  }

}
