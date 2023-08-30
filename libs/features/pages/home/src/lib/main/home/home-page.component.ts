import { Component } from '@angular/core';
import { ContentText } from 'libs/models/schema/ui/texts/src/lib/content-text.interface';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';
@Component({
  selector: 'elewa-website-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  contentData: ContentText[] = [
    {
      title: 'from here to the world',
      descriptions: [
        'Getting thousands of people up to speed can be hard and expensive. But it doesnt have to be.',
        'Elewa is an education partner which develops the kind of training that work at scale. This without losing track of what matters most, people!',
        'Personalized, enjoyable and effective training at scale. Technology enabled, human powered.',
      ],
    },
    {
      title: 'people at the center',
      descriptions: [
        'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels, to understand "elewa" how people live and learn',
        'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization, networks can be reused every time a training need arises; at a fraction of the cost of the current solution.',
      ],
    },
  ];

  imageData: ImageConfig[] = [
    {
      title: 'Pill',
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/5644cf28e4b0c6c59217a904/1514921151051-YVTMSVKHFYZ1EBFNUUUB/12+Books+Black+Women+need+to+read+in+2018.jpg',
      visualisation: ImageVisualisation.Pill,
      maxWidth: '250px',
    },
    {
      title: 'Stacked',
      imageSrc:
        'https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=612x612&w=0&k=20&c=xwCQ441cTHFBTZpb8ihvVwqqtTZjmees1C3xdJc_nfw=',
      visualisation: ImageVisualisation.Pill,
      maxWidth: '250px',
    },
  ];
}
