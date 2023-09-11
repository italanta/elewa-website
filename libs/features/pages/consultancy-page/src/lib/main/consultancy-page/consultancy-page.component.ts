import { Component } from '@angular/core';
import { __highlightedImage } from '@elewa-website/models/data/sections';

@Component({
  selector: 'elewa-website-consultancy-page',
  templateUrl: './consultancy-page.component.html',
  styleUrls: ['./consultancy-page.component.scss'],
})
export class ConsultancyPageComponent {
  content = __highlightedImage
}
