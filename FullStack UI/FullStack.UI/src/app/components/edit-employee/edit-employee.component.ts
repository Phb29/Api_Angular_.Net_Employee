import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model'; 
import { EmployeesService } from 'src/Service/employees.service'; 

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee?: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
   private  router:Router
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.employeeService.getEmployee(id).subscribe(employee => {
      this.employee = employee;
    });
  }
}



 updateEmployee(): void {
  if (this.employee !== undefined) {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe({
next:(Response)=>{
this.router.navigate(['employees'])
}
})

}


}
deleteEmployee(id: string) {
  this.employeeService.deleteEmployee(id).subscribe({
    next: (response) => {
      this.router.navigate(['employees'])
    }
  });
}
}