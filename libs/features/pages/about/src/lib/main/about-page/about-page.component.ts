import { Component } from '@angular/core';
import { __highlightedSDGList } from '@elewa-website/models/data/sections';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  sdgListData: InfoCard[] = __highlightedSDGList; // Assign your data here
}
