import { Injectable } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable()
export class ModalRefService {

  instance: ModalDynamicComponent;

  context: any;

  constructor() { }

  show = (eventData = null) => this.instance.show(eventData);

  hide = (eventData = null) => this.instance.hide(eventData);

  get onShow() {
    return this.instance.onShow;
  }

  get onHide() {
    return this.instance.onHide;
  }
}
