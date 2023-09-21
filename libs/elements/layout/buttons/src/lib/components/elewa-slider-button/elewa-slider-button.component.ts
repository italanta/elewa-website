import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class SliderButtonComponent {
  constructor(private _router: Router) {}

  /** initial values that checks if the button is hovered  */
  isHovered = false;

  /** data that contains the dynamic button data  */
  @Input() buttonData!: SliderButtonData;

  @Output() btnClickEvent = new EventEmitter();

  /** sets hover to true when the button is hovered  */
  onMouseEnter() {
    this.isHovered = true;
  }

  /** sets hover to false when mouse leaves the button  */
  onMouseLeave() {
    this.isHovered = false;
  }

  /** function to be executed when the button is clicked */
  onClick() {
    this.btnClickEvent.emit();

    const { action } = this.buttonData;

    if (!action) {
      this._router.navigateByUrl('/contact');
    } else if (this.isExternalLink(action)) {
      window.open(action, '_blank');
    } else {
      this.navigateToInternalPage(action);
    }
  }

  private isExternalLink(link: string) {
    return link.startsWith('http');
  }

  private navigateToInternalPage(page: string) {
    this._router.navigate([page]);
  }

  /** toggles button background color when the button is hovered  */
  get btnBgColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverBgColor;
    } else {
      return this.buttonData?.bgColor;
    }
  }

  /** toggles button color when the button is hovered  */
  get btnColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverColor;
    } else {
      return this.buttonData?.color;
    }
  }

  /** toggles button icon background color when the button is hovered  */
  get iconBgColor() {
    if (this.isHovered) {
      return this.buttonData?.hoverIconBackgroundColor;
    } else {
      return this.buttonData?.iconBackgroundColor;
    }
  }

  /** toggles button icon color when the button is hovered  */
  get iconColor() {
    if (this.isHovered) {
      return this.buttonData?.iconBackgroundColor;
    } else {
      return this.buttonData?.iconColor;
    }
  }
}
