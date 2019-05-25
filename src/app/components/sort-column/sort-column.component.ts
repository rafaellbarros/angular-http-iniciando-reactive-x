import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[sortColumn]',
  template: `
    <a href="javascript:void(0)">
      <ng-content></ng-content>
      <i class="fas fa-caret-down"></i>
      <i class="fas fa-caret-up"></i>

    </a>
  `,
  styles: []
})
export class SortColumnComponent implements OnInit {

  @Input()
  sortColumn: { column, sort };

  @Input()
  columnName;

  constructor() { }

  ngOnInit() {
  }

}
