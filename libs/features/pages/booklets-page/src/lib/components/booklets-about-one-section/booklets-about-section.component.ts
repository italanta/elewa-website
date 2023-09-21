import { Component, Input } from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { __bookletsAboutOne } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-about-one-section',
  templateUrl: './booklets-about-section.component.html',
  styleUrls: ['./booklets-about-section.component.scss'],
})
export class BookletsAboutSectionOneComponent {
  /*Where to set an input Object/Data */
  @Input() InputData: ImageAndText = __bookletsAboutOne;
}
