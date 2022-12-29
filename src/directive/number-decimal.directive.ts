import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberDecimal]'
})
export class NumberDecimalDirective {
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private _el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(this._el.nativeElement.value);
    // Allow specialKeys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this._el.nativeElement.value;
    const position = this._el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}
