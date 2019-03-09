import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-title',
  template: `
    <div class="modal-header">
      <ng-content></ng-content>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `,
  styles: []
})
export class ModalTitleComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    const firstChild = nativeElement.firstChild.firstChild;
    (<any>firstChild).classList.add('modal-title');
  }
}
// modal específico
// <modal-title>conteudo aqui! aparecerá no ng-content</modal-title>

