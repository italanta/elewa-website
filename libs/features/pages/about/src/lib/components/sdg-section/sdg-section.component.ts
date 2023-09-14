import { Component } from '@angular/core';

import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedSDGList, __sdgSliderButton } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-sdg-section',
  templateUrl: './sdg-section.component.html',
  styleUrls: ['./sdg-section.component.scss'],
})
export class SdgSectionComponent {
  sdgList: SDGCard[] = __highlightedSDGList;
  buttonData = __sdgSliderButton;
}
