import { Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ModalContentDirective } from '../modal-content.directive';

declare const $;

@Component({
  selector: 'modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styles: []
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective) modalContent: ModalContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef) { }

  ngOnInit() {
  }

  mount(modalImplementedComponent) {
    const componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(modalImplementedComponent);
    this.modalContent.viewContainerRef.createComponent(componentFactory);
  }


  show() {
    $(this.divModal).modal('show');
  }

  hide() {
    $(this.divModal).modal('hide');
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
