import { Injectable } from '@angular/core';
import employees, { Employee } from '../models/employees';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:3000/employees';

  employees;

  constructor(private http: HttpClient) { }

  getEmployess() {
    return this.http.get(this.employeesUrl);
  }

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    this.employees.push(employee);
  }

  destroyEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

}


