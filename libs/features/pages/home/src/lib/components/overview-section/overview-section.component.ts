import { Component } from '@angular/core';
import { __overviewImageAndTextData } from '@elewa-website/data/sections';


@Component({
  selector: 'elewa-website-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.scss'],
})
export class OverviewSectionComponent {
  // imported data
  imageAndTextData = __overviewImageAndTextData;

}
