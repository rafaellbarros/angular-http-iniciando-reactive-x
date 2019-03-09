import { ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from './modal.component';

export class Modalable implements OnInit{

  @ViewChild(ModalComponent)
  public modalComponent: ModalComponent;

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    this.modalComponent.onHide.subscribe(event => {
      console.log('onHide: ', event);
      this.onHide.emit(event);
    });

    this.modalComponent.onShow.subscribe(event => {
      console.log('onShow: ', event);
      this.onShow.emit(event);
    });
  }


  show() {
    this.modalComponent.show();
  }

  hide() {
    this.modalComponent.hide();
  }
}
