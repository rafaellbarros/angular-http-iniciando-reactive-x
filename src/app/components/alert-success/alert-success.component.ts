import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-success',
  template: `
    <div class="alert alert-success" role="alert">
      <ng-content></ng-content>
    </div>
  `
})
export class AlertSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
