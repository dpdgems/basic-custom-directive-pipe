import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('highlight') searchTerm: string = '';
  @Input('sensitive') caseSensitive: boolean = false;
  @Input() customClasses: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.searchTerm || this.searchTerm !== '') {
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.getFormattedText()
      );
    } else {
      // searchTerm is empty.
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.el.nativeElement.innerText
      );
    }
  }

  getFormattedText() {
    // insert style for matching text.
    const text = this.el.nativeElement.innerText || '';
    const regex = new RegExp(this.searchTerm, this.caseSensitive ? 'g' : 'gi');

    return text.replace(regex, (match: string) => {
      return `<span class="${this.customClasses}">${match}</span>`;
    });
  }
}
