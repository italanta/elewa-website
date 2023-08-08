import { Component, Input } from '@angular/core';
import { ProjectItem } from 'libs/models/sections/projects/project-item.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})

/* A card that displays an image and its description based on
the values passed to the card. The card should be reusable */

export class ElewaProjectItemCardComponent {
  /** Card info to be passed in */
  @Input() project: ProjectItem = {
    title: 'Introducing Conversational lerning ipsum dolar',
    description: 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia',
    tag: 'Education',
    imgSrc: 'https://img.freepik.com/free-photo/happy-family-silhouette-sunset_1303-22466.jpg?w=740&t=st=1691417747~exp=1691418347~hmac=22598c9578711ae29543ec33dce4d2933a0b720b8a0389610e2f41f8cc032bc9',
  };
}
