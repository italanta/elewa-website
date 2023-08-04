import { Component } from '@angular/core';
import { __homeCarouselData } from '@elewa-website/models/data/ui';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent 
{
  public myReferences= __homeCarouselData;
}
