import { Component, OnInit, ElementRef, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotifyMessageService } from 'src/app/services/notify-message.service';

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.scss']
})
export class EmployeeEditModalComponent implements OnInit {

  employeeId: number;
  employee: Employee = {
    name: '',
    salary: 1,
    bonus: 0
  };

  error = false;

  constructor(
    private employeeService: EmployeeService,
    private modalRef: ModalRefService,
    private notifyMessage: NotifyMessageService) {
    this.employeeId = this.modalRef.context['employeeId'];
  }

  ngOnInit() {
    // this.carregaDadosEmployee();
    this.carregaDadosEmployeeAsync();
  }

  editEmployee(event) {
    this.employeeService.edit(this.employee).subscribe(resp => {
      this.modalRef.hide({ employee: resp, submitted: true });
      this.notifyMessage.success('Sucesso', `O empgregado <strong>${this.employee.name}</strong> foi alterado com sucesso!`);
    });
  }

  async carregaDadosEmployeeAsync() {
    try {
      this.employee = await this.employeeService.getByIdAsync(this.employeeId);
    } catch (error) {
      this.error = true;
    }
  }

  carregaDadosEmployee() {
    this.employeeService.getById(this.employeeId).subscribe(resp => {
      this.employee = resp;
    }, error => this.error = true);
  }
}
