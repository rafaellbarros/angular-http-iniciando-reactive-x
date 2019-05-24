import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { InputDirective } from '../../../directives/input.directive';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent  implements OnInit, AfterViewInit, OnDestroy {

  employee: Employee = {
    name: '',
    salary:  0,
    bonus: 0,
  };

  // @ViewChild(InputDirective)
  // inputName: InputDirective;

  @ViewChild('inputSalary', { read: InputDirective })
  inputName: InputDirective;

  @ViewChildren(InputDirective)
  inputs;


  constructor(
    private employeeService: EmployeeService,
    private modalRef: ModalRefService) {
  }

  ngOnInit() {

    this.modalRef.onShow.subscribe(() => {
      console.log('inputName > ', this.inputName);
      this.inputName.focus();
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.inputs);
  }

  addEmployee(event) {
    // const copy = Object.assign({}, this.employee);
    const employee = {name: this.employee.name, salary: this.employee.salary, bonus: this.employee.bonus};
    this.employeeService.addEmployee(employee);
    this.modalRef.hide({employee: employee , submitted: true});
  }

  ngOnDestroy(): void {
    console.log('employee new modal foi destruído');
  }
}
