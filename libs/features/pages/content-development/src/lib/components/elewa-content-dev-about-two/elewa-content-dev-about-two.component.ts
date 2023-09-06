import { Component, Input } from '@angular/core';
import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-content-dev-about-two',
  templateUrl: './elewa-content-dev-about-two.component.html',
  styleUrls: ['./elewa-content-dev-about-two.component.scss'],
})
export class ElewaContentDevAboutTwoComponent {
  @Input() imageAndDetails!: ImageAndDetails;


}
