import { Component } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent {
  item : ProjectItem = {
    title: 'Introducing Conversational learning ipsum dolar',
    description: 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolerem ipsum quia',
    tag: 'Education',
    imgSrc: 'https://media.gettyimages.com/id/1191061770/photo/happy-african-family-sitting-and-using-laptop.jpg?s=612x612&w=0&k=20&c=HwyA5I0iiaCfsj3I-AKNM25rexpOJkSxUhV73VG_oxY='
  }
}
