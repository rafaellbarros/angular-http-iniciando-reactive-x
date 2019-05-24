import { Injectable } from '@angular/core';
import employees, { Employee } from '../models/employees';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:3000/employees';

  employees;

  constructor(private http: HttpClient) { }

  getEmployess() {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  createEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    return this.http.post(this.employeesUrl, employee);
  }

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;

  }

  destroyEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

}


