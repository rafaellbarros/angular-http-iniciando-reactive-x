import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  EmbeddedViewRef } from '@angular/core';

import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';
import { ModalRefService } from './modal-ref.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalRef: ModalRefService;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) { }

  create(modalImplementedComponent): ModalRefService {
    const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(ModalDynamicComponent)
    .create(this.injector);

    this.modalRef = componentRef.instance.mount(modalImplementedComponent);

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild(domElement);

    return this.modalRef;

  }

  open(modalImplementedComponent) {
    this.modalRef.show();
  }
}
