import { Component } from '@angular/core';
import { __highlightedSDGList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  highlightedSDGList = __highlightedSDGList;
}
