import { Component } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-elewa-content-dev-about-one',
  templateUrl: './elewa-content-dev-about-one.component.html',
  styleUrls: ['./elewa-content-dev-about-one.component.scss'],
})
export class ElewaContentDevAboutOneComponent {

    /* an object(InputData) to input data using type ImageAndText from re-usable component */
    InputData !: ImageAndText;
    
}
