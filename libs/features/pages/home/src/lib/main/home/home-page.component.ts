import { Component } from '@angular/core';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public imageconfigs: ImageConfig[] = [{
    title: 'Pill',
    imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
    visualisation: ImageVisualisation.Pill,
    maxWidth: '200px'
  },
  {
    title: 'Stacked',
    imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
    visualisation: ImageVisualisation.Stacked,
    maxWidth: '200px'
  },
  {
    title: 'Window',
    imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
    visualisation: ImageVisualisation.Window,
    maxWidth: '200px'
  },
  {
    title: 'Card',
    imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
    visualisation: ImageVisualisation.Card,
    maxWidth: '200px'
  }
]
}
