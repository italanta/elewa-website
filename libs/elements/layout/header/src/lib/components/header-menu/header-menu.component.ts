import { Component } from '@angular/core';

import { MenuItem } from '@elewa-website/models/schema/ui/header';
import { __consultancyItem, __contentDevelopmentItem, __bookletsItem, __conversationalLearningItem } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {

  consultancyItem = __consultancyItem
  contentDevelopmentItem = __contentDevelopmentItem
  bookletsItem = __bookletsItem
  conversationalLearningItem = __conversationalLearningItem
  
}
