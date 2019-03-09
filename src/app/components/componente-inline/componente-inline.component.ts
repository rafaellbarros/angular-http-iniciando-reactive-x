import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-inline',
  template: `
    <p>
      componente-inline works!
    </p>
  `,
  styles: [
    'p { color: green; }',
    'p { background: black }'
  ]
})
export class ComponenteInlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
