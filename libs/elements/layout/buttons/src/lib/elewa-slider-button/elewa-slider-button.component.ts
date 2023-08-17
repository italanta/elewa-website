import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';


@Component({
  selector: 'elewa-website-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class ElewaSliderButtonComponent {
  @Input() sliderButtonData!: SliderButtonData;
  @Output() sliderButtonClick: EventEmitter<void> = new EventEmitter<void>();
  hovered = false;
  currentStyles: object = {};
  iconCurrentStyles: object = {};
  hoveredCurrentStyles: object = {};
  hoveredIconCurrentStyles: object = {};

  ngOnInit(): void {
    this.currentStyles = {

      "background-color": this.sliderButtonData.bgColour,
      "color":this.sliderButtonData.color,
      "border": `2px solid ${this.sliderButtonData.borderColor}`
    }

    this.iconCurrentStyles = {
      "background-color": this.sliderButtonData.iconBackgroundColor,
      "color":this.sliderButtonData.iconColor,
    }

    this.hoveredCurrentStyles = {
      "background-color": this.sliderButtonData.hoverBgColour,
      "color":this.sliderButtonData.hoverColor,
      "border": `2px solid ${this.sliderButtonData.hoverBorderColor}`
    }

    this.hoveredIconCurrentStyles = {
      "background-color": this.sliderButtonData.hoverIconBackgroundColor,
      "color":this.sliderButtonData.hoverIconColor,

    }
  }

  emitSliderButtonClick() {
    this.sliderButtonClick.emit();
  }
  
}
