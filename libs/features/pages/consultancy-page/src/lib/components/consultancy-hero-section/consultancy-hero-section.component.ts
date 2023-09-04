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
      lorem ipsum
    `
  }

  buttonData = {
    text: 'Unlock your potential ', // Fill the require
    bgColor: 'black',
    color: 'white',
    // iconBackgroundColor: 'white',
    // hoverIconColor: 'black',
    // hoverIconackgroundColor: 'black',
    hoverBgColor: 'transparent',
    // hoverColor: 'black',
    // iconColor: 'black'
  }


}
