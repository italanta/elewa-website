import { Component } from '@angular/core';
import { ContentText } from 'libs/models/schema/ui/texts/content-text.interface';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';

  textContents: ContentText[] = [
    {
      title: 'From here to the world',
      descriptions: [
        'Getting thousands of people up to speed can be hard and expensive. But it doesn\'t have to be. \n Elewa is an education partner which develops the kind of training that work at scale. This without  losing track of what matters most, people!\nPersonalised, enjoyable and effective training solutons at scale. Technology enabled; Human powered.'
      ],
    },
    {
      title: 'People at the centre',
      descriptions: [
        ' People are the secret to successful education programs. THrough in-depth research, we work with your organisation at different levels to understand ("elewa") how people live and learn.\n Based on decades of research, this understanding allows us to co-create strong learning networks within your organisation. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
      ],
    },
  ];
}
