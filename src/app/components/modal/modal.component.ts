import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.querySelector('[modal-title]').classList.add('modal-title');
    nativeElement.querySelector('[modal-body]').classList.add('modal-body');
    nativeElement.querySelector('[modal-footer]').classList.add('modal-footer');

    $(this.divModal).on('hidden.bs.modal', (e) => {
      // console.log('escondido', e);
      this.onHide.emit(e);
    });

    $(this.divModal).on('shown.bs.modal', (e) => {
      // console.log('mostrado', e);
      this.onShow.emit(e);
    });

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
