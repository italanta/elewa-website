import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaWebsiteToggleMenu]',
})
export class ToggleMenuDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
