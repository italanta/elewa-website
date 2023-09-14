import { Component } from '@angular/core';
<<<<<<< HEAD
import { __highlightedAboutItems } from '@elewa-website/data/sections';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';
=======
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';
import { __highlightedAboutItems } from '@elewa-website/data/sections';

>>>>>>> b580ec0a7e2d82f3ac92a31485816a0f30a0f53b

@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
<<<<<<< HEAD
  herotexts = __highlightedAboutItems // Assigns data from the '__highlightedAboutItems' module.
  image= __elewaImageData // Assigns data from the '__elewaImageData' module.
  // Expose the 'ImageVisualisation' enum from the imported module for use in the template.
  ImageVisualisation = ImageVisualisation;
}
=======
  highlightedAboutItems = __highlightedAboutItems
  image= __elewaImageData

}
>>>>>>> b580ec0a7e2d82f3ac92a31485816a0f30a0f53b
