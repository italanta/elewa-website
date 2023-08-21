import { Component, Input } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-text-section',
  templateUrl: './elewa-text-section.component.html',
  styleUrls: ['./elewa-text-section.component.scss'],
})
export class ElewaTextSectionComponent {
  @Input () textSection!: HeroText [];
}
