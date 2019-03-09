import { Component } from '@angular/core';

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
  styleUrls: ['./modal-title.component.scss']
})
export class ModalTitleComponent {

}
// modal específico
// <modal-title>conteudo aqui! aparecerá no ng-content</modal-title>

