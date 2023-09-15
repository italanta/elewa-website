import { Component, Input, OnInit } from '@angular/core';
import { ButtonData } from '../../../../../../models/schema/ui/buttons/src/lib/button.interface';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent implements OnInit {
  @Input() buttonData!: ButtonData;

  ngOnInit(): void {
    // Initialize properties here if needed
    if (!this.buttonData) {
      this.buttonData = {
        text: 'Click me', 
      };
    }
  }

  onMouseEnter() {
    // Apply hover styles
    this.buttonData.bgColor = this.buttonData.hoverBgColor;
    this.buttonData.color = this.buttonData.hoverColor;
  }

  onMouseLeave() {
    // Reset to original styles
    this.buttonData.bgColor = this.buttonData.bgColor;
    this.buttonData.color = this.buttonData.color;
  }
}