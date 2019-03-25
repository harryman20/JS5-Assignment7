import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[appTextDecoration]'
})
export class TextDecorationDirective {
    @Input() Some: string;
    constructor(private elm: ElementRef) {

    }

    @HostListener('mouseenter') onMouseEnter() {
      this.check(this.Some);
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.check('none');
    }

    private check(Some) {
        this.elm.nativeElement.style.textDecoration = Some;
    }
}
