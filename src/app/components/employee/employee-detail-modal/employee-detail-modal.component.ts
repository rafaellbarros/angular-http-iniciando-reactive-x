import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Modalable } from '../../modal/modalable';
import { Employee } from '../../../models/employees';

@Component({
  selector: 'employee-detail-modal',
  templateUrl: './employee-detail-modal.component.html',
  styleUrls: ['./employee-detail-modal.component.css']
})
export class EmployeeDetailModalComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee;

  @ViewChild('notBonus')
  template: TemplateRef<any>;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    console.log('this.template -> ',this.template);
  }

}
