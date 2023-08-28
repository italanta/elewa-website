import { Component } from '@angular/core';

import { ContentText } from '@elewa-website/models/schema/ui/texts';
@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  yourContentData: ContentText[] = [
    {
      title: 'from here to the world',
      descriptions: ['Getting thousands of people up to speed can be hard and expensive.But it doesnt have to be.', 'Elewa is an education partner which develops the kind of training that work at scale.This without losing track of what matters most,people!', 'Personalized, enjoyable and effective training at scale.Technology enabled, human powered.'],
    },
    {
      title: 'people at the center',
      descriptions: ['People are the secret to successful education programs.Through indepth research, we work with your oragnization at different levels, to understand "elewa" how people live and learn', 'Based on decades of research, this understanding allows us to co-create strong learning networks withing your organization,networks can be reused everytime a training need arises; at a fraction of the cost of the current solution.'],
    },
    // Add more items as needed
  ];
}
