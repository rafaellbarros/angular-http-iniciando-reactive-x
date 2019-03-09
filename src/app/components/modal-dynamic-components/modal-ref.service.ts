import { Injectable } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable()
export class ModalRefService {

  instance: ModalDynamicComponent;

  constructor() { }

  show() {
    this.instance.show();
  }

  hide() {
    this.instance.hide();
  }

}
