import { Component } from '@angular/core';
import { ProjectItem } from 'libs/models/schema/ui/cards/src/lib/project-item.interface';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  project : ProjectItem = {
    title: "Google",
    description: "kkkkk",
    imgSrc:"https://icon2.cleanpng.com/20180416/dqq/kisspng-node-js-javascript-server-side-scripting-ruby-5ad4ed856462f4.9640198115239038774112.jpg",
    tag: "Google Inc"
  }
}

