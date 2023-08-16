import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class SliderButtonComponent {
  isHovered = false;

  @Input() buttonData?: SliderButtonData;

  @Output() btnClickEvent = new EventEmitter();

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  onClick = () => {
    this.btnClickEvent.emit();
  };

  get btnBgColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverBgColor;
    } else {
      return this.buttonData?.bgColor;
    }
  }

  get btnColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverColor;
    } else {
      return this.buttonData?.color;
    }
  }

  get iconBgColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverIconBackgroundColor;
    } else {
      return this.buttonData?.iconBackgroundColor;
    }
  }

  get iconColor() {
    if (this.isHovered) {
      return this.buttonData?.iconBackgroundColor;
    } else {
      return this.buttonData?.iconColor;
    }
  }
}
