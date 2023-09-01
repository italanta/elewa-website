import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedSDGList } from '@elewa-website/data/sections';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { __mockSliderButtonData } from '@elewa-website/data/ui/content-text';

@Component({
  selector: 'elewa-website-elewa-sdg-list',
  templateUrl: './elewa-sdg-list.component.html',
  styleUrls: ['./elewa-sdg-list.component.scss'],
})
export class ElewaSdgListComponent implements OnInit {
  @Input() sdgList!: InfoCard[];
  @Input() buttonData!: SliderButtonData;

  ngOnInit(): void {
    this.sdgList = __highlightedSDGList;
    this.buttonData = __mockSliderButtonData;
  }
}
