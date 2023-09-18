import { Component, Input } from '@angular/core';
import { EducationText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-education-card-3',
  templateUrl: './education-card-3.component.html',
  styleUrls: ['./education-card-3.component.scss'],
})
export class EducationCard3Component {
  @Input() educationItem3!: EducationText;
}
