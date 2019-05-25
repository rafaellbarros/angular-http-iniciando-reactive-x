import { EmployeeDetailModalComponent } from './../employee-detail-modal/employee-detail-modal.component';
import { EmployeeDeleteModalComponent } from './../employee-delete-modal/employee-delete-modal.component';
import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { ModalService } from '../../modal-dynamic-components/modal.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  search = '';

  constructor(
    public employeeService: EmployeeService,
    private modalService: ModalService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  openDetailModal(employee: Employee) {
    const modalRef = this.modalService.create(EmployeeDetailModalComponent, {
      employee
    });
    modalRef.show();
  }

  openNewModal() {
    const modalRef = this.modalService.create(EmployeeNewModalComponent);
    modalRef.onHide.subscribe((event) => {
      this.getEmployeeAfterSuccess(event);
    });
    modalRef.show();
  }

  openEditModal(employee: Employee) {
    const modalRef = this.modalService.create(EmployeeEditModalComponent, {
      employeeId: employee.id
    });
    modalRef.onHide.subscribe((event) => {
      this.getEmployeeAfterSuccess(event);
    });
    modalRef.show();
  }

  openDestroyModal(employee: Employee) {
    const modalRef = this.modalService.create(EmployeeDeleteModalComponent, {
      employeeId: employee.id
    });
    modalRef.onHide.subscribe((event) => {
      this.getEmployeeAfterSuccess(event);
    });
    modalRef.show();
  }

  getEmployeeAfterSuccess(event) {
    const eventData = event.data;
    if (eventData && eventData.hasOwnProperty('submitted')) {
      this.getEmployees();
    }
  }

  handlerSearch(search) {
    this.search = search;
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(resp => {
      this.employees = resp;
    });
  }
}
