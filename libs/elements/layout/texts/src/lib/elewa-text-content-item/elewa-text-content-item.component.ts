import { Component, Input } from '@angular/core';

import { ContentText } from '@elewa-website/elements/layout/texts';

@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: [ './elewa-text-content-item.component.scss' ],
})
export class ElewaTextContentItemComponent {

  @Input() content: ContentText;

}
