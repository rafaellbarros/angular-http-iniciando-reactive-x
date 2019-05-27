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
  sortColumn = { column: 'name',  sort: 'asc' };
  pagination = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

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

  handleSearch(search) {
    this.search = search;
    this.pagination .currentPage = 1;
    this.getEmployees();
  }

  handleSort(event) {
    this.getEmployees();
  }

  handlePagination(page) {
    this.pagination.currentPage = page;
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.list({
      search: this.search,
      sort: this.sortColumn,
      pagination: {
        page: this.pagination.currentPage,
        perPage: this.pagination.itemsPerPage
      }}).subscribe(resp => {
        this.pagination.totalItems = +resp.headers.get('X-Total-Count');
        this.employees = resp.body;
    });
  }
}

// pure function
// passa parametros e sempre tem o mesmo resultado com esses paramentros
// chamar varias vezes a funçao passando os mesmo paramentos pode retornar o mesmo resultado
/*
function soma(param1, param2) {
  return param1 + param2;
}

// impure function
// chamar varias vezes a funçao passando os mesmo paramentos pode retornar valores diferentes

const contador = function() {
  let count = 0;
  return function (valor) {
    return count += valor;
  };
}();

contador(1); // 1
contador(1); // 2
contador(1); // 3
contador(1); // 4
*/