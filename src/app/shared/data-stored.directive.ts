import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class DataStoredDirective {
  @HostBinding('style.color') fontColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')  mouseenter(event: Event) {
    console.log(event)
    this.fontColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    this.fontColor = 'black'
  }
}
