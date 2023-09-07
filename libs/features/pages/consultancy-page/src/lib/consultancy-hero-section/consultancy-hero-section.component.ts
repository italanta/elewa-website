import { Component, Input, OnInit } from '@angular/core';
import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { __highlightedContent as heroTextData } from '@elewa-website/models/data/sections';

@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent implements OnInit {
  @Input() heroTextData!: ContentText[];

  ngOnInit() {
    // Assign the imported data to heroTextData directly
    this.heroTextData = heroTextData;
  }
}
