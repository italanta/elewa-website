import { Component } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-two',
  templateUrl: './elewa-consultancy-about-two.component.html',
  styleUrls: ['./elewa-consultancy-about-two.component.scss'],
})
export class ElewaConsultancyAboutTwoComponent {

  /* an object(InputData) to input data using type ImageAndText from re-usable component */
  InputData !: ImageAndText;

}
