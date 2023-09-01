import { Component, Input } from '@angular/core';

import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { _mockSliderButtonData } from '@elewa-website/data/ui/content-text';


@Component({
  selector: 'elewa-website-elewa-sdg-list',
  templateUrl: './elewa-sdg-list.component.html',
  styleUrls: ['./elewa-sdg-list.component.scss'],
})
export class ElewaSdgListComponent {
  @Input() sdgList: InfoCard[] = []
  sliderButton: SliderButtonData =_mockSliderButtonData;
}
