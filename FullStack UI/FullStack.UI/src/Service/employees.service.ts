import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/environment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseApiUrl}api/employees`);
  }

  getEmployee(id: string): Observable<Employee> {
  return this.http.get<Employee>(`${this.baseApiUrl}api/employees/${id}`);
}



  addEmployee(addemployee: Employee): Observable<Employee> {
addemployee.id='00000000-0000-0000-0000-000000000000';

    return this.http.post<Employee>(this.baseApiUrl +'api/employees', addemployee);
  }

  
updateEmployee(id:string,employee: Employee): Observable<Employee> {
  
  return this.http.put<Employee>(this.baseApiUrl+'api/employees/'+id,employee);
}
deleteEmployee(id:string):Observable<Employee>{
 return this.http.delete<Employee>(this.baseApiUrl + 'api/employees/' +id);

}   
}
