import { Component, Input } from '@angular/core';

import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-sdg-list',
  templateUrl: './elewa-sdg-list.component.html',
  styleUrls: ['./elewa-sdg-list.component.scss'],
})
export class ElewaSdgListComponent {
  @Input() sdgList!: SDGCard[];
  @Input() buttonData!: SliderButtonData;
}
