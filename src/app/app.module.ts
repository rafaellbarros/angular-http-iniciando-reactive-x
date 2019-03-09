import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { ComponenteInlineComponent } from './components/componente-inline/componente-inline.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { EmployeeDetailModalComponent } from './components/employee/employee-detail-modal/employee-detail-modal.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgContentTesteComponent } from './components/ng-content-teste/ng-content-teste.component';
import { TestDynamicComponent } from './components/test-dynamic-component/test-dynamic.component';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { InputDirective } from './directives/input.directive';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';




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
    EmployeeDetailModalComponent,
    InputDirective,
    GetViewContainerDirective,
    TestDynamicComponent
  ],
  entryComponents: [
    TestDynamicComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
