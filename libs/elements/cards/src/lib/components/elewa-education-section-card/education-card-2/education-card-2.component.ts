import { Component, Input } from '@angular/core';
import { EducationText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-education-card-2',
  templateUrl: './education-card-2.component.html',
  styleUrls: ['./education-card-2.component.scss'],
})
export class EducationCard2Component {
  @Input() educationItem2!: EducationText;
}
