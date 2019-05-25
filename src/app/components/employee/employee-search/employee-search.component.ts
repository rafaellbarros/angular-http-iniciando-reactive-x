import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'employee-search',
  template: `
      <form (submit)="submit()">
      <div class="form-row">
          <div class="col-11">
              <input type="search" class="form-control" name="search" placeholder="Digite sua busca" [(ngModel)]="search">
          </div>
          <div class="col-1">
              <button type="submit" class="btn btn-primary" title="Buscar">
                  <i class="fas fa-search"></i>
              </button>
          </div>
      </div>
    </form>
  `,
  styles: []
})
export class EmployeeSearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  search = '';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSearch.emit(this.search);
    return false;
  }

}
