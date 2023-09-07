import { Component } from '@angular/core';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';


@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: [ './home-hero-section.component.scss' ],
})
export class HomeHeroSectionComponent {

  //Wording of the button
  buttonData = {
    text: 'Unlock your potential ',
  }

  // Wording of the text section
  herotexts = {
    title: "Training at scale",
    subtitle: `Human-centered, meaningful and enjoyable`
  }

  // Add the imageConfig property
  imageConfig: ImageConfig = {
    imageSrc: '',   // Add image URL
    title: '',      // Add image title
    visualisation: ImageVisualisation.Stacked, // You can set this to Stacked or any other value as needed
    maxWidth: '803px',
    maxHeight: '796px',
  };
}
