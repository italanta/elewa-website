import { Component } from '@angular/core';

import { ImageConfig, ImageVisualisation } from './../../../../libs/models/schema/ui/images/image-config.interface';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';
  imageConfigArray: ImageConfig[] = [
    {
      title: 'Pill',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv-5Vcj_zz3Vq4crryp-2I_MhIP_t_o1GbH1UuWUvlU3swMTfG',
      visualisation: ImageVisualisation.Pill,
    },
    {
      title: 'Stacked',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCjBU0IXG5EfsqIJ6NGVKCudkfqFKxDZ_CdPjrfrBlAUDcFiy6',
      visualisation: ImageVisualisation.Stacked,
    },
    {
      title: 'Window',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLhuHJmD_Q8zMr_NB-4FmV9XrswgNqReV3uP3Rrg-gONa5NtuS',
      visualisation: ImageVisualisation.Window,
    },
    {
      title: 'Card',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDXsG9AQ26ZAGdH-XPnZKTlhTcy5d1kEJHV48FwdWRg3aXgzyA',
      visualisation: ImageVisualisation.Card,
    }
  ];
}
