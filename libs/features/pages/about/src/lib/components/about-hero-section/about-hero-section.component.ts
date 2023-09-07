import { Component } from '@angular/core';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';


@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
  heroAboutData = {
    title: 'Lorem ipsum dolorem sit eos',
    subtitle: '',
    description: 'Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor.'
  };
  image= __elewaImageData

}