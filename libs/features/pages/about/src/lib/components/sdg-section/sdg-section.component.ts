import { Component } from '@angular/core';

import { SDGCard } from '@elewa-website/models/schema/ui/cards';
<<<<<<< HEAD
import { __highlightedSDGList, __buttonData } from '@elewa-website/data/sections';
=======
import { __highlightedSDGList, __sdgSliderButton } from '@elewa-website/data/sections';
>>>>>>> 8aba9427e54db3742dd86f1196054c7cf0497e77

@Component({
  selector: 'elewa-website-sdg-section',
  templateUrl: './sdg-section.component.html',
  styleUrls: ['./sdg-section.component.scss'],
})
export class SdgSectionComponent {
<<<<<<< HEAD
  sdgCard: SDGCard[] = __highlightedSDGList;
  buttonData = __buttonData;
=======
  sdgList: SDGCard[] = __highlightedSDGList;
  buttonData = __sdgSliderButton;
>>>>>>> 8aba9427e54db3742dd86f1196054c7cf0497e77
}
