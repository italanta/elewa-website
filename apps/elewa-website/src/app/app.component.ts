import { Component } from '@angular/core';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';

  imageConfig: ImageConfig[] = [
    {
      title: 'Image 1',
      imageSrc: 'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      visualisation: ImageVisualisation.Pill,
      maxWidth: '300px',
    },
    {
      title: 'Image 2',
      imageSrc: 'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      visualisation: ImageVisualisation.Stacked,
      maxWidth: '300px',
    },
    {
      title: 'Image 3',
      imageSrc: 'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      visualisation: ImageVisualisation.Window,
      maxWidth: '300px',
    },
    {
      title: 'Image 4',
      imageSrc: 'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      visualisation: ImageVisualisation.Card,
      maxWidth: '300px',
    },
  ];
}
