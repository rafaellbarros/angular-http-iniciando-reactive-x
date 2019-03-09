import { Component, OnInit, ElementRef, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { ModalRefService } from '../../modal-dynamic-components/modal-ref.service';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit, OnDestroy {

  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private modalRef: ModalRefService) {
    this.employee = this.modalRef.context['employee'];
  }

  ngOnInit() {
  }

  editEmployee(event) {
    const employee = {name: this.employee.name, salary: this.employee.salary, bonus: this.employee.bonus};
    this.onSubmit.emit(employee);
    this.modalRef.hide({ employee, submitted: true });
  }

  ngOnDestroy(): void {
    console.log('employee edit modal foi destruído');
  }

}
