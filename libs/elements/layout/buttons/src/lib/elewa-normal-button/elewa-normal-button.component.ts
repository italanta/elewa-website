import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonData } from '@elewa-website/ui/buttons';

@Component({
  selector: 'elewa-website-normal-button',
  template: `
    <button
      [style.backgroundColor]="buttonData?.bgColor || defaultBgColor"
      [style.color]="buttonData?.color || defaultColor"
      (click)="handleClick()"
    >
      {{ buttonData?.text }}
    </button>
  `,
})
export class ElewaNormalButtonComponent {
  @Input() buttonData: ButtonData | undefined;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  defaultBgColor = '#f0f0f0';
  defaultColor = '#333';

  handleClick(): void {
    this.buttonClick.emit();
  }
}
