import { Component, Input } from '@angular/core';
import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { Content as mockContent } from '@elewa-website/data/ui/content-text';


@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: ['./elewa-text-content-item.component.scss'],
})
export class ElewaTextContentItemComponent {
  @Input() textContent!: ContentText []; 
  Content: ContentText[];

  constructor () {
    this.Content = mockContent;
  }
}
