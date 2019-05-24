import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { ModalService } from '../../modal-dynamic-components/modal.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employeeToDelete: Employee;
  employeeToDetail: Employee;

  showMessageSuccess = false;

  constructor(
    public employeeService: EmployeeService,
    private modalService: ModalService) {
  }

  ngOnInit() {

  }

  openDetailModal(employee: Employee) {
    this.employeeToDetail = employee;
  }

  openNewModal() {
    const modalRef = this.modalService.create(EmployeeNewModalComponent);
    modalRef.onHide.subscribe((event) => {
      console.warn(event);
    });
    modalRef.show();
  }

  openEditModal(employee: Employee) {
    const modalRef = this.modalService.create(EmployeeEditModalComponent, {
      employee
    });
    modalRef.onHide.subscribe((event) => {
      console.warn(event);
    });
    modalRef.show();
  }

  openDestroyModal(employee: Employee) {
    this.employeeToDelete = employee;
  }

  getSalaryColor(e) {
    return e.salary > 2000 ? 'green' : null;
  }

}
