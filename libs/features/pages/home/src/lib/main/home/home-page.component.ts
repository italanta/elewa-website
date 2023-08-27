import { Component } from '@angular/core';
import { ElewaTextContentItemComponent } from 'libs/elements/layout/texts/src/lib/elewa-text-content-item/elewa-text-content-item.component';
import { ContentText } from '@elewa-website/models/schema/ui/texts';
@Component({
  selector: 'elewa-website-text-content-item',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  yourContentData: ContentText[] = [
    {
      title: 'Your Title 1',
      descriptions: ['Description 1', 'Description 2', 'Description 3'],
    },
    {
      title: 'Your Title 2',
      descriptions: ['Description 1', 'Description 2', 'Description 3'],
    },
    // Add more items as needed
  ];
}
