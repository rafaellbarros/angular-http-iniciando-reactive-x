import { Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef, Injector, EventEmitter } from '@angular/core';
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

  onHide: EventEmitter<any> = new EventEmitter();
  onShow: EventEmitter<any> = new EventEmitter();

  @ViewChild(ModalContentDirective) modalContent: ModalContentDirective;

  modalRef: ModalRefService;
  showEventData = null;
  hideEventData = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef,
    private injector: Injector) { }

  ngOnInit() {
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHide.emit({
        event: e,
        data: this.hideEventData
      });
    });

    $(this.divModal).on('shown.bs.modal', (e) => {
      this.onShow.emit({
        event: e,
        data: this.showEventData
      });
    });

  }

  mount(modalImplementedComponent): ModalRefService {
    const componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(modalImplementedComponent);
    const viewContainerRef = this.modalContent.viewContainerRef;
    viewContainerRef.createComponent(componentFactory, null, this.makeLocalInjector());
    return this.modalRef;
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
    this.modalRef = new ModalRefService();
    this.modalRef.instance = this;
    return this.modalRef;
  }


  show(eventData = null) {
    this.showEventData = eventData;
    $(this.divModal).modal('show');
  }

  hide(eventData = null) {
    this.hideEventData = eventData;
    $(this.divModal).modal('hide');
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
