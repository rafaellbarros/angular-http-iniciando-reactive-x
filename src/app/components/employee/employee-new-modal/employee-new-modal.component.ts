import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { InputDirective } from '../../../directives/input.directive';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';
import { NotifyMessageService } from 'src/app/services/notify-message.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent  implements OnInit, OnDestroy {

  employee: Employee = {
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
    private modalRef: ModalRefService,
    private notifyMessage: NotifyMessageService) {
  }

  ngOnInit() {

    this.modalRef.onShow.subscribe(() => {
      this.inputName.focus();
    });
  }


  addEmployee(event) {
    this.employeeService.create(this.employee).subscribe(resp => {
      this.modalRef.hide({employee: resp , submitted: true});
      this.notifyMessage.success('Sucesso', `O empgregado <strong>${this.employee.name}</strong> foi criado com sucesso!`);
    });
  }

  ngOnDestroy(): void {
    console.log('employee new modal foi destruído');
  }
}
