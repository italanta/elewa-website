import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaWebsiteNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    const item = elm.getElementsByClassName("item");
    elm.append(item[0])
  }
}