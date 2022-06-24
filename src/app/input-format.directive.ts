import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: string = "";

  constructor(private el: ElementRef) { }

  @HostListener("blur") onBlur() {
    const value: string = this.el.nativeElement.value;
    console.log(this.format)
    if (this.format == "lowercase")
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();

  }

}
