import { Component, Input } from '@angular/core';
import { ContentText } from '../../../../../../models/schema/ui/texts/content-text.interface';

@Component({
  selector: 'elewa-website-elewa-text-content-item',
  templateUrl: './elewa-text-content-item.component.html',
  styleUrls: ['./elewa-text-content-item.component.scss']
})
export class ElewaTextContentItemComponent {
  @Input() content: ContentText = { title: '', descriptions: [] };
  textContents: ContentText[] = [
      {
        title: 'From here to the world',
        descriptions: [
          'Getting thousands of people up to speed can be hard and expensive. But it doesn\'t have to be.', 
          'Elewa is an education partner which develops the kind of training that work at scale. This without  losing track of what matters most, people!',
          'Personalised, enjoyable and effective training solutons at scale. Technology enabled; Human powered.'
        ],
      },
      {
        title: 'People at the centre',
        descriptions: [
          ' People are the secret to successful education programs. Through in-depth research, we work with your organisation at different levels to understand ("elewa") how people live and learn.',
          ' Based on decades of research, this understanding allows us to co-create strong learning networks within your organisation. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.'
        ],
      },
    ];
}
