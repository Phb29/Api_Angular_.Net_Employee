import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/Service/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employess-list',
  templateUrl: './employess-list.component.html',
  styleUrls: ['./employess-list.component.css']
})
export class EmployessListComponent implements OnInit {

employees: Employee[] = []
  
   constructor(private employeeService:EmployeesService){}  


  ngOnInit() {

    this.employeeService.getAllEmployees().subscribe(employees => {
    this.employees = employees;
  });
}

   
  
  }
