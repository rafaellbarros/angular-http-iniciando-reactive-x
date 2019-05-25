import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: '[sortColumn]',
  template: `
    <a href="javascript:void(0)">
      <ng-content></ng-content>&nbsp;
      <i class="fas" [ngClass]="{'fa-caret-down': showArrowDown(), 'fa-caret-up': showArrowUp()}"></i>
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


  @HostListener('click')
  changeSort() {
    this.sortColumn.column = this.columnName;
    this.sortColumn.sort = this.sortColumn.sort === 'desc' ? 'asc' : 'desc';
  }

  showArrowDown() {
    return this.columnName === this.sortColumn.column && this.sortColumn.sort === 'desc';
  }

  showArrowUp() {
    return this.columnName === this.sortColumn.column && this.sortColumn.sort === 'asc';
  }


}
