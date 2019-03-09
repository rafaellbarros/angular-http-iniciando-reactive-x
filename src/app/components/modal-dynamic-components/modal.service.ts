import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  EmbeddedViewRef } from '@angular/core';

import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) { }

  open(modalImplementedComponent) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalDynamicComponent)
      .create(this.injector);

    componentRef.instance.mount(modalImplementedComponent);

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild(domElement);

    setTimeout(() => {
      componentRef.instance.show();
    }, 100);
  }
}
