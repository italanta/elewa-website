import { Component, Input, OnInit } from '@angular/core';

import { _content as mockContent } from '@elewa-website/data/ui/content-text';
import { ContentText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: ['./elewa-text-content-item.component.scss'],
})
export class ElewaTextContentItemComponent implements OnInit {
  @Input() content!: ContentText[];

  ngOnInit(){
    this.content = mockContent;
  }
}
