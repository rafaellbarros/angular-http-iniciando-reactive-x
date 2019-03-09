import { Injectable } from '@angular/core';
import employees, { Employee } from '../models/employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public employees = employees;

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    this.employees.push(employee);
  }

  destroyEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

}


