// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlightCourse]'
// })
// export class HighlightCourseDirective {

//   constructor() { }

// }

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective {

  @Input() appHighlightCourse: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlightCourse || 'lightgreen'); // Highlight on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // Remove highlight
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
