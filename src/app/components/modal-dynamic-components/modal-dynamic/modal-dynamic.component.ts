import { Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { ModalContentDirective } from '../modal-content.directive';
import { ModalRefService } from '../modal-ref.service';

declare const $;

@Component({
  selector: 'modal-dynamic',
  template: `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <ng-template modalContent></ng-template>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective) modalContent: ModalContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef,
    private injector: Injector) { }

  ngOnInit() {
  }

  mount(modalImplementedComponent) {
    const componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(modalImplementedComponent);
    const viewContainerRef = this.modalContent.viewContainerRef;
    viewContainerRef.createComponent(componentFactory, null, this.makeLocalInjector());
  }

  private makeLocalInjector() {
    return Injector.create({
      providers: [
        {provide: ModalRefService, useValue: this.makeModalRef()}
      ],
      parent: this.injector
    });
  }

  private makeModalRef() {
    const modalRef = new ModalRefService();
    modalRef.instance = this;
    return modalRef;
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
