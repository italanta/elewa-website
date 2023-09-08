import { Component } from '@angular/core';

import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedSDGList } from '@elewa-website/data/sections';
import { __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-sdg-section',
  templateUrl: './sdg-section.component.html',
  styleUrls: ['./sdg-section.component.scss'],
})
export class SdgSectionComponent {
  sdgList: InfoCard[] = __highlightedSDGList;
  buttonData = __buttonData;
}
