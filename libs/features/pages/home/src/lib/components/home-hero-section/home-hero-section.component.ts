import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.scss'],
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
}
