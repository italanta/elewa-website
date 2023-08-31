import { Component, Input } from '@angular/core';
import { __mockSliderButtonData } from '@elewa-website/models/data/sections';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-sdg-list',
  templateUrl: './elewa-sdg-list.component.html',
  styleUrls: ['./elewa-sdg-list.component.scss'],
})
export class ElewaSdgListComponent {
  @Input() sdgList: InfoCard[] = [];
  buttonData: SliderButtonData = __mockSliderButtonData;
}
