import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { InputDirective } from '../../../directives/input.directive';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent  implements OnInit, OnDestroy {

  employee: Employee = {
    id: 0,
    name: '',
    salary:  0,
    bonus: 0,
  };


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


  addEmployee(event) {
    this.employeeService.createEmployee(this.employee).subscribe(resp => {
      this.modalRef.hide({employee: resp , submitted: true});
    });
  }

  ngOnDestroy(): void {
    console.log('employee new modal foi destruído');
  }
}
