import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Employee } from '../../../models/employees';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-detail-modal',
  templateUrl: './employee-detail-modal.component.html',
  styleUrls: ['./employee-detail-modal.component.css']
})
export class EmployeeDetailModalComponent implements OnInit {



  employee: Employee;

  constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) { 
    this.employee = this.modalRef.context['employee'];
  }

  ngOnInit() {
  }


}
