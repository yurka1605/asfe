import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[asfeAutofocus]'
})
export class AutofocusDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    if (this.elRef?.nativeElement) {
      const native = this.elRef.nativeElement;
      const el = native.localName === 'asfe-input' ? native.lastChild : native;
      el.focus();
    }
  }
}
