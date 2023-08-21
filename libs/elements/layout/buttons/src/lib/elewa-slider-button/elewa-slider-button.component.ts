import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

/**
 * Represents a slider button component with customizable styles and hover effects.
 */
@Component({
  selector: 'elewa-website-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class ElewaSliderButtonComponent {
  /** Input data for the slider button */
  @Input() sliderButtonData!: SliderButtonData;

  /** Output event triggered when the button is clicked */
  @Output() sliderButtonClick: EventEmitter<void> = new EventEmitter<void>();

  /** Flag to track whether the button is hovered */
  hovered = false;

  /** Reference to the button element */
  @ViewChild('buttonRef') buttonRef!: ElementRef;

  /** Stores current styles for the hovered icon */
  hoveredIconCurrentStyles: any;

  /**
   * Retrieves button layout styles based on hover state.
   * @param hovered - Whether the button is hovered or not.
   * @returns Object containing background color, text color, and border color styles.
   */
  getButtonStyles(hovered: boolean) {
    return {
      'background-color': this.hovered ? this.sliderButtonData.hoverBgColour : this.sliderButtonData.bgColour,
      'color': this.hovered ? this.sliderButtonData.hoverColor : this.sliderButtonData.color,
      'border': this.hovered ? this.sliderButtonData.hoverBorderColor : this.sliderButtonData.borderColor
    };
  }

  /**
   * Retrieves icon styles based on hover state.
   * @param hovered - Whether the button is hovered or not.
   * @returns Object containing background color, text color, and transformation styles.
   */
  getIconStyles(hovered: boolean) {
    if (hovered) {
      const buttonElement: HTMLElement = this.buttonRef.nativeElement;
      const buttonWidth: number = buttonElement.offsetWidth;

      // Calculate icon translation when hovered
      this.hoveredIconCurrentStyles = {
        'transform': `translateX(${-buttonWidth + 45}px)`,
      };
    } else {
      this.hoveredIconCurrentStyles = {}; // Reset styles when not hovered
    }

    return {
      'background-color': hovered ? this.sliderButtonData.hoverIconBackgroundColor : this.sliderButtonData.iconBackgroundColor,
      'color': hovered ? this.sliderButtonData.hoverIconColor : this.sliderButtonData.iconColor,
      ...this.hoveredIconCurrentStyles
    };
  }

  /**
   * Emits the slider button click event.
   */
  emitSliderButtonClick() {
    this.sliderButtonClick.emit();
  }
}