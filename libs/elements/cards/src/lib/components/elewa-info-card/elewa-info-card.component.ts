import { Component, Input, OnInit } from '@angular/core';

import { _infoCard as mockCards } from '@elewa-website/data/ui/cards'
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-info-card',
  templateUrl: './elewa-info-card.component.html',
  styleUrls: ['./elewa-info-card.component.scss'],
})
export class ElewaInfoCardComponent implements OnInit {
  @Input() infoCard!: InfoCard[];

  ngOnInit() {
      this.infoCard = mockCards
  }
}
