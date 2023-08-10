import { Component } from '@angular/core';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public imageconfigs: ImageConfig[] = []
}
