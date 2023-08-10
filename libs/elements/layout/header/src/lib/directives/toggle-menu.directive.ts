import { Directive, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaWebsiteHeaderToggleMenu]',
})
export class ToggleMenuDirective {
  constructor(private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const hambuger = document.querySelector('.hambuger');
    const navMenu = document.querySelector('.nav-menu');

    if (hambuger?.classList.contains('active')) {
      this.renderer.removeClass(hambuger, 'active');
      this.renderer.removeClass(navMenu, 'active');
    } else {
      this.renderer.addClass(hambuger, 'active');
      this.renderer.addClass(navMenu, 'active');
    }
  }
}
