import { Component, Input } from '@angular/core';

import {
  __consultancyItem,
  __contentDevelopmentItem,
  __bookletsItem,
  __conversationalLearningItem,
} from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  @Input({ required: true }) isMenuActive!: boolean;

  consultancyItem = __consultancyItem;
  contentDevelopmentItem = __contentDevelopmentItem;
  bookletsItem = __bookletsItem;
  conversationalLearningItem = __conversationalLearningItem;
}
