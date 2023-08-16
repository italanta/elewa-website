import { Component, Input, OnInit } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class SliderButtonComponent implements OnInit {
  isHovered = false;
  btnBackgroundColor!: string;
  iconBackgroundColor!: string;
  @Input() buttonData?: SliderButtonData;

  ngOnInit(): void {
    this.setBgColor();
    this.setIconColor();
  }

  setBgColor() {
    if (this.isHovered) {
      this.btnBackgroundColor = this.buttonData?.hoverBorderColor as string;
    } else {
      this.btnBackgroundColor = this.buttonData?.bgColor as string;
    }
  }
  setIconColor() {
    if (this.isHovered) {
      this.iconBackgroundColor = this.buttonData?.hoverIconColor as string;
    } else {
      this.iconBackgroundColor = this.buttonData?.iconColor as string;
    }
  }
}
