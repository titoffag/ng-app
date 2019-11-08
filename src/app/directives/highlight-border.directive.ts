import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') borderStyle: string | null;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.changeBorderStyle(this.borderStyle);
  }

  changeBorderStyle(borderStyle: string | null) {
    this.renderer.setStyle(this.element.nativeElement, 'border', borderStyle);
  }
}
