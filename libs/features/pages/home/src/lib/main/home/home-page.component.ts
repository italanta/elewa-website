import { Component } from '@angular/core';
import { Overview } from "libs/models/schema/ui/overview-section/overview"

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  data: Overview = {
    content: [
      'Getting thousands of people can be hard and expensive.',
      ' Elewa is an education partner which develops the kind of training that work at scale. This without losing track of what matters most, people!',
      ' Personalised, enjoyable and effective training solutions at scale. Technology enabled; Human powered.'
    ],
    header: 'from here to the world',
    imgUrl: 'https://images.pexels.com/photos/4918149/pexels-photo-4918149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bgColor: '',
    headerColor: '',
    contentColor: ''
  };



}
