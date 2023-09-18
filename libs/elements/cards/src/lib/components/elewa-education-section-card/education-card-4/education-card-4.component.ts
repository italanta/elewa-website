import { Component, Input } from '@angular/core';
import { EducationText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-education-card-4',
  templateUrl: './education-card-4.component.html',
  styleUrls: ['./education-card-4.component.scss'],
})
export class EducationCard4Component {
  @Input() educationItem4!: EducationText;
}
