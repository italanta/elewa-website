import { Component } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent {
  projectitem : ProjectItem = {
    title: 'Introducing Conversational learning ipsum dolar',
    description: 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolerem ipsum quia',
    tag: 'Education',
    imgSrc: 'img/gettyimages-1017628288-2048x2048.png'
  }
}
