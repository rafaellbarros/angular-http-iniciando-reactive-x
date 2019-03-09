import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AlertSuccessComponent } from './components/alert-success/alert-success.component';

import { SalaryColorDirective } from './directives/salary-color.directive';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { ComponenteInlineComponent } from './components/componente-inline/componente-inline.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgContentTesteComponent } from './components/ng-content-teste/ng-content-teste.component';
import { EmployeeDetailModalComponent } from './components/employee/employee-detail-modal/employee-detail-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    AlertSuccessComponent,
    MyCurrencyPipe,
    ComponenteInlineComponent,
    ModalComponent,
    NgContentTesteComponent,
    EmployeeDetailModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
