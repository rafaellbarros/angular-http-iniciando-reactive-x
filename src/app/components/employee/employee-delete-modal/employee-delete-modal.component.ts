import { ModalRefService } from './../../modal-dynamic-components/modal-ref.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employees';
import { NotifyMessageService } from 'src/app/services/notify-message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.scss']
})
export class EmployeeDeleteModalComponent implements OnInit {

  employeeId: number;
  employee$: Observable<Employee>;

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
    this.employee$ = this.employeeService.getById(this.employeeId);
  }

  async destroy() {
    const employee = await this.employee$.toPromise();

    this.employeeService.delete(employee.id).subscribe(() => {
      this.modalRef.hide({ employee: employee, submitted: true });
      this.notifyMessage.success('Sucesso', `O empgregado <strong>${employee.name}</strong> foi excluído com sucesso!`);
    });

  }

  carregaDadosEmployee() {
    this.employeeService.getById(this.employeeId).subscribe(resp => {
      this.employee = resp;
    });
  }

}
