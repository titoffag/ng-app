import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input,
  NgModule
} from '@angular/core';
import { differenceInDays, parseISO } from 'date-fns';

import { BLUE_BORDER, GREEN_BORDER } from '@constants/styles';

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
    const currentDate = new Date();
    const relatedDate = parseISO(this.date);

    const isReleased = relatedDate <= currentDate;
    const isFresh = differenceInDays(currentDate, relatedDate) <= 14;
    const isUpcoming = relatedDate > currentDate;

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

@NgModule({
  declarations: [HighlightBorderDirective],
  exports: [HighlightBorderDirective]
})
export class HighlightBorderDirectiveModule {}
