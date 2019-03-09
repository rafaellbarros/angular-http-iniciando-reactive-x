import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ModalService } from './components/modal-dynamic-components/modal.service';
import { TestDynamicComponent } from './components/test-dynamic-component/test-dynamic.component';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { TestModalDynamicComponent } from './components/modal-dynamic-components/test-modal-dynamic/test-modal-dynamic.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('employeeList', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;

  @ViewChild('template')
  template: TemplateRef<any>;

  @ViewChild(GetViewContainerDirective)
  getViewContainer: GetViewContainerDirective;

  components = [TestDynamicComponent, EmployeeListComponent];
  indexComponents = -1;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService) {

  }

  ngOnInit() {
    setInterval(() => {
      this.getViewContainer.viewContainerRef.clear();
      this.indexComponents++;
      if  (this.indexComponents === this.components.length) {
        this.indexComponents = 0;
      }
      const componentFactory = this.componentFactoryResolver
        .resolveComponentFactory(this.components[this.indexComponents]);
      this.getViewContainer.viewContainerRef.createComponent(componentFactory);
    }, 4000);

    this.modalService.open(TestModalDynamicComponent);
  }
/*
  ngAfterViewInit() {
    // createEmbeddedView
    // console.log(this.viewContainer);
    // this.viewContainer.createEmbeddedView(this.template);
    // this.viewContainer.clear();
    setInterval(() => {
      this.getViewContainer.viewContainerRef.clear();
      this.indexComponents++;
      if  (this.indexComponents === this.components.length) {
        this.indexComponents = 0;
      }
      const componentFactory = this.componentFactoryResolver
        .resolveComponentFactory(this.components[this.indexComponents]);
      this.getViewContainer.viewContainerRef.createComponent(componentFactory);
    }, 4000);

  }
*/
}
