import { Component, OnInit, ElementRef, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';
import { EmployeeService } from 'src/app/services/employee.service';

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

  constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) {
    this.employeeId = this.modalRef.context['employeeId'];
  }

  ngOnInit() {
    this.carregaDadosEmployee();
  }

  editEmployee(event) {
    this.employeeService.editEmployee(this.employee).subscribe(resp => {
      this.modalRef.hide({ employee: resp, submitted: true });
    });
  }

  carregaDadosEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(resp => {
      this.employee = resp;
    });
  }
}
