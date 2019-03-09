import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from 'src/app/models/employees';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  addEmployee(event) {
    // const copy = Object.assign({}, this.employee);
    const employee = {name: this.employee.name, salary: this.employee.salary, bonus: this.employee.bonus};
    this.onSubmit.emit(employee);
    this.hide();
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

}
