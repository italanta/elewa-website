// Import necessary components and modules
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-slider-button', // Component selector
  templateUrl: './elewa-slider-button.component.html', // Template file for the component
  styleUrls: ['./elewa-slider-button.component.scss'], // Styles file for the component
})
export class ElewaSliderButtonComponent {
  @Input() sliderButtonData!: SliderButtonData; // Input data for the slider button
  @Output() sliderButtonClick: EventEmitter<void> = new EventEmitter<void>(); // Output event for button click
  hovered = false; // Flag to track hover state
  @ViewChild('buttonRef') buttonRef!: ElementRef; // Reference to the button element
  hoveredIconCurrentStyles: any; // Stores current styles for the hovered icon

  // Function to get button layout styles based on hover state
  getButtonStyles(hovered: boolean) {
    return {
      'background-color': this.hovered ? this.sliderButtonData.hoverBgColour : this.sliderButtonData.bgColour,
      'color': this.hovered ? this.sliderButtonData.hoverColor : this.sliderButtonData.color,
      'border': this.hovered ? this.sliderButtonData.hoverBorderColor : this.sliderButtonData.borderColor
    };
  }

  // Function to get icon styles based on hover state
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

  // Function to emit the slider button click event
  emitSliderButtonClick() {
    this.sliderButtonClick.emit();
  }
}