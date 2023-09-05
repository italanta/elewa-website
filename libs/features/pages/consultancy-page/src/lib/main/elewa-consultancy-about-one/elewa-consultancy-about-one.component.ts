import { Component } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';


@Component({
  selector: 'elewa-website-elewa-consultancy-about-one',
  templateUrl: './elewa-consultancy-about-one.component.html',
  styleUrls: ['./elewa-consultancy-about-one.component.scss'],
})
export class ElewaConsultancyAboutOneComponent {

  /* an object(InputData) to input data using type ImageAndText from re-usable component */
  InputData !: ImageAndText;
}
