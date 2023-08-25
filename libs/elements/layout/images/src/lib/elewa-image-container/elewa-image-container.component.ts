import { Component } from '@angular/core';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  image: ImageConfig = {
    title: 'Pill',
    imageSrc: '',
    visualisation: 0,
  };
}
