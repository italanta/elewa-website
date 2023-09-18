import { Component, Input } from '@angular/core';
import { EducationText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-education-card-1',
  templateUrl: './education-card-1.component.html',
  styleUrls: ['./education-card-1.component.scss'],
})
export class EducationCard1Component {
  @Input() educationItem!: EducationText;
}
