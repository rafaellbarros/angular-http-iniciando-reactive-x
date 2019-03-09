
import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  }


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() { }

  addEmployee(event) {
    console.warn(event);
    const bonus = this.employee.salary >= 1000 ? 0 : this.employee.bonus;
    this.employeeService.employees.push({name: this.employee.name, salary: this.employee.salary, bonus: bonus});
    console.log(this.employeeService.employees);
  }

}
