import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { EmployeeDetailModalComponent } from './components/employee/employee-detail-modal/employee-detail-modal.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { InputDirective } from './directives/input.directive';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { ModalDynamicComponent } from './components/modal-dynamic-components/modal-dynamic/modal-dynamic.component';
import { ModalContentDirective } from './components/modal-dynamic-components/modal-content.directive';
import { ModalTitleComponent } from './components/modal-dynamic-components/modal-title/modal-title.component';
import { ModalBodyComponent } from './components/modal-dynamic-components/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal-dynamic-components/modal-footer/modal-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeSearchComponent } from './components/employee/employee-search/employee-search.component';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';
import { SortColumnComponent } from './components/sort-column/sort-column.component';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    AlertSuccessComponent,
    MyCurrencyPipe,
    EmployeeDetailModalComponent,
    InputDirective,
    GetViewContainerDirective,
    ModalDynamicComponent,
    ModalContentDirective,
    ModalTitleComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    EmployeeSearchComponent,
    EmployeeFilterPipe,
    SortColumnComponent,
    OrderPipe,
  ],
  entryComponents: [
    EmployeeListComponent,
    ModalDynamicComponent,
    EmployeeNewModalComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    EmployeeDetailModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
