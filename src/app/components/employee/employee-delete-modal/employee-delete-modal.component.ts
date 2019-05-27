import { ModalRefService } from './../../modal-dynamic-components/modal-ref.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employees';
import { NotifyMessageService } from 'src/app/services/notify-message.service';

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.scss']
})
export class EmployeeDeleteModalComponent implements OnInit {

  employeeId: number;
  employee: Employee = {
    name: '',
    salary: 1,
    bonus: 0
  };

  constructor(
    private employeeService: EmployeeService,
    private modalRef: ModalRefService,
    private notifyMessage: NotifyMessageService) {
    this.employeeId = this.modalRef.context['employeeId'];
  }

  ngOnInit() {
    this.carregaDadosEmployee();
  }

  destroy() {
    this.employeeService.delete(this.employee.id).subscribe(() => {
      this.modalRef.hide({ employee: this.employee, submitted: true });
      this.notifyMessage.success('Sucesso', `O empgregado <strong>${this.employee.name}</strong> foi excluído com sucesso!`);
    });
  }

  carregaDadosEmployee() {
    this.employeeService.getById(this.employeeId).subscribe(resp => {
      this.employee = resp;
    });
  }
}
