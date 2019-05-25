import { ModalRefService } from './../../modal-dynamic-components/modal-ref.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employees';

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

  constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) {
    this.employeeId = this.modalRef.context['employeeId'];
  }

  ngOnInit() {
    this.carregaDadosEmployee();
  }

  destroy() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(() => {
      this.modalRef.hide({ employee: this.employee, submitted: true });
    });
  }

  carregaDadosEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(resp => {
      this.employee = resp;
    });
  }
}
