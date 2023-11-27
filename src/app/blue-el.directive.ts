import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueEl]'
})
export class BlueElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="green"
  }

}
