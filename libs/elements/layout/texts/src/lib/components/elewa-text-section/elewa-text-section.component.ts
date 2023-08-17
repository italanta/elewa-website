import { Component, Input, OnInit } from '@angular/core';

import { _heroInfo as mockHeroText } from '@elewa-website/data/ui/hero-text'
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-text-section',
  templateUrl: './elewa-text-section.component.html',
  styleUrls: ['./elewa-text-section.component.scss'],
})
export class ElewaTextSectionComponent {
  @Input() heroInfo!: HeroText[]

  ngOnInit(){
    this.heroInfo = mockHeroText
  }
}
