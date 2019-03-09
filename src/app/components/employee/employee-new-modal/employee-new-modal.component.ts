import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { Modalable } from '../../modal';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee = {
    name: '',
    salary:  0,
    bonus: 0,
  };
  @ViewChild('inputName')
  inputName: ElementRef;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.onShow.subscribe(() => {
      console.log('inputName > ', this.inputName);
      this.inputName.nativeElement.focus();
    })
  }

  addEmployee(event) {
    // const copy = Object.assign({}, this.employee);
    const employee = {name: this.employee.name, salary: this.employee.salary, bonus: this.employee.bonus};
    this.employeeService.addEmployee(employee);
    this.onSubmit.emit(employee);
    this.hide();
  }

  /*
  fechou(event) {
    console.log('fechou ', event);
  }

  mostrou(event) {
    console.log('mostrou ', event);
  }
  */
}
