import { Component } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  sliderButtonData: SliderButtonData = {

    text: "Unlock your Potential",

    bgColour: "black", 
    color: "white",
    borderColor: "",
    iconColor: "black",
    iconBackgroundColor: "white",
  
    hoverBgColour: "white",
    hoverColor: "black",
    hoverBorderColor: "",
    hoverIconColor: "white",
    hoverIconBackgroundColor: "black"

  }

  sliderButton: SliderButtonData = {

    text: "Unlock",

    bgColour: "black", 
    color: "white",
    borderColor: "2px solid red",
    iconColor: "black",
    iconBackgroundColor: "white",
  
    hoverBgColour: "white",
    hoverColor: "black",
    hoverBorderColor: "2px solid green",
    hoverIconColor: "white",
    hoverIconBackgroundColor: "black"

  }

  handleSliderButtonClick(){

    console.log("button clicked")
    
  }

}
