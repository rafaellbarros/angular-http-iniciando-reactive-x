import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:3000/employees';

  employees;

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`${this.employeesUrl}/${id}`);
  }

  createEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    return this.http.post(this.employeesUrl, employee);
  }

  editEmployee(employee: Employee) {
    return this.http.put(`${this.employeesUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.employeesUrl}/${id}`);
  }

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
  }

  destroyEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

}


