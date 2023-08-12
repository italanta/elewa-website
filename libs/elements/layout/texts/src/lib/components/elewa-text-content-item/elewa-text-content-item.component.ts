import { Component, Input } from '@angular/core';

import { ContentText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: [ './elewa-text-content-item.component.scss' ],
})

  /**
   * This is a class for ElewaTextContentItemComponent. 
   * It can be used to create texts in the web app
   */
export class ElewaTextContentItemComponent {


  @Input() content!: ContentText;

}
