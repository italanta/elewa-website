import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[elewaWebsiteHeaderToggleMenu]',
})
export class ToggleMenuDirective {
  // the input decorator is provided an alias same as the directive's selector name, therefore the directive will expect to be assigned a boolean value when used in the template.
  @Input('elewaWebsiteHeaderToggleMenu') toggleValue!: boolean;

  // The output decorator will bind the updated value that is changed by this decorator to the isActive value in the header.component.ts by emmiting this updated value as an event which is being listened to in the component.ts file
  @Output() toggleActive = new EventEmitter<boolean>();

  // This changes will occur when we click any element in our template which implement this directive
  @HostListener('click') onClick() {
    this.toggleValue = !this.toggleValue;
    this.toggleActive.emit(this.toggleValue);
  }
}
