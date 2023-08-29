import { Component } from '@angular/core';
import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';
@Component({
  selector: 'elewa-website-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  imageConfigs: ImageConfig[] = [
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
      visualisation: ImageVisualisation.stacked,
      maxWidth: '250px',
    },
    {
      title: 'Window',
      imageSrc:
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
      visualisation: ImageVisualisation.Window,
      maxWidth: '250px',
    },
    {
      title: 'Card',
      imageSrc:
        'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg',
      visualisation: ImageVisualisation.Card,
      maxWidth: '250px',
    },
  ];
}
