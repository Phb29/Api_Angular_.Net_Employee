import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployessListComponent } from './components/employees/employess-list/employess-list.component';
import { AddEmployeeComponent } from './components/employees/employess-list/add-employee/add-employee.component';
import { EditEmployeeComponent } from 'src/app/components/edit-employee/edit-employee.component';


const routes: Routes = [
{
path: '',
component:EmployessListComponent
} ,
{
path: 'employees',
component:EmployessListComponent
}, 
{
path: 'employees/add',
component:AddEmployeeComponent
} ,
{
path: 'employees/edit/:id', component: EditEmployeeComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
