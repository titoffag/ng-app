import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { differenceInDays } from 'date-fns';

import { BLUE_BORDER, GREEN_BORDER } from 'src/app/constants';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') date: string;

  private borderStyle: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.changeBorderStyle();
  }

  changeBorderStyle() {
    const currentDate: Date = new Date();
    const creationDate: Date = new Date(this.date);

    const isReleased: boolean = creationDate < currentDate;
    const isFresh: boolean = differenceInDays(currentDate, creationDate) <= 14;
    const isUpcoming: boolean = creationDate > currentDate;

    if (isReleased && isFresh) {
      this.borderStyle = GREEN_BORDER;
    } else if (isUpcoming) {
      this.borderStyle = BLUE_BORDER;
    }

    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      this.borderStyle
    );
  }
}
