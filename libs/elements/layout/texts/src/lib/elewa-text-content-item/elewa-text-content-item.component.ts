import { Component, Input } from '@angular/core';
import { ContentText } from '@libs/models/schema/ui/texts/content-text.interface';


@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: ['./elewa-text-content-item.component.scss'],
})
export class ElewaTextContentItemComponent {
  @Input() content: ContentText = { title: '', descriptions: [] }; // Initialize here

}
