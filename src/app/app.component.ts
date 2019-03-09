import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { TestDynamicComponentComponent } from './components/test-dynamic-component/test-dynamic-component.component';
import { GetViewContainerDirective } from './directives/get-view-container.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('employeeList', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;

  @ViewChild('template')
  template: TemplateRef<any>;

  @ViewChild(GetViewContainerDirective)
  getViewContainer: GetViewContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // createEmbeddedView
    // console.log(this.viewContainer);
    // this.viewContainer.createEmbeddedView(this.template);
    // this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(TestDynamicComponentComponent);

    setTimeout(() => {
      this.getViewContainer.viewContainerRef.createComponent(componentFactory);
    }, 10000);


  }

}
