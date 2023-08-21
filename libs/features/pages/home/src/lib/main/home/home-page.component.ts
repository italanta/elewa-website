import { Component } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/schema/ui/cards';
@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  project : ProjectItem = {
    title:'Mongo Db. Beginner to advanced',
    description:'MongoDB is a widely-used NoSQL database that offers a flexible and scalable approach to managing data. ',
    imgSrc:"https://rb.gy/07l7z",
    tag:'Database'
  }
}

