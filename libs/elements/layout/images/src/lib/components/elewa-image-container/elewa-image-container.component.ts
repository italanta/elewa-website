import { Component } from '@angular/core';
import { ImageConfig } from '../../../../../../../models/schema/ui/images/image-config.interface';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  pill: ImageConfig = {
    title: 'Pill',
    imageSrc: '',
    visualisation: 0,
  };
  stacked: ImageConfig = {
    title: 'Stacked',
    imageSrc: '',
    visualisation: 1,
  };
  window: ImageConfig = {
    title: 'Window',
    imageSrc: '',
    visualisation: 2,
  };
  card: ImageConfig = {
    title: 'Card',
    imageSrc: '',
    visualisation: 3,
  };
}
