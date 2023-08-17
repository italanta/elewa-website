import { Component, Input, OnInit } from '@angular/core';

import { _heroText as mockHeroTexts } from '@elewa-website/data/ui/texts'
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-text-section',
  templateUrl: './elewa-text-section.component.html',
  styleUrls: ['./elewa-text-section.component.scss'],
})
export class ElewaTextSectionComponent implements OnInit {
  @Input() heroText!: HeroText[]

  ngOnInit(){
    this.heroText = mockHeroTexts
  }
}
