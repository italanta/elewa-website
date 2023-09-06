import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent {

  herotexts ={
    title: 'Learning design',
    description: `
      Your organisation has the potential to turn every task into an oportunity to learn.
      From growing crop, to nursing someone to good health, to developing the next-generation technology.
      Let's work together to make the magic happen.
    `
  }

  buttonData = {
    text: 'Unlock your potential ', // Fill the require
    bgColor: 'black',
    color: 'white',
    hoverBgColor: 'transparent',
  }


}
