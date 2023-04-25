import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeesService } from 'src/Service/employees.service';
import { Employee } from 'src/app/models/employee.model';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
constructor(private service:EmployeesService,private router:Router){
}

addemplo: Employee={
id:'',
name:'',
email:'',
phone:0,
salary:0,
department:''


};
ngOnInit(): void {
  
}
addEmloyee(){
this.service.addEmployee(this.addemplo).subscribe({
next:(employee)=>{
this.router.navigate(['employees'])
}
})
}
}
