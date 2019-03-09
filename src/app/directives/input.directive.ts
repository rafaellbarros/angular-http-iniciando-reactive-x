import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: '[appInput]'
  selector: 'input'
})
export class InputDirective {

  constructor(private elRef: ElementRef) { }

  focus = () => this.elRef.nativeElement.focus();

}
