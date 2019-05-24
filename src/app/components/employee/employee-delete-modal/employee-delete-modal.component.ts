import { ModalRefService } from './../../modal-dynamic-components/modal-ref.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employees';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {


  employee: Employee;

  constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) { 
    this.employee = this.modalRef.context['employee'];
  }

  ngOnInit() {
  }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.modalRef.hide({employee: this.employee, submitted: true });
  }

}
