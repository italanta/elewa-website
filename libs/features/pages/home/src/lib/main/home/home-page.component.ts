import { Component, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { TranslocoService } from '@ngneat/transloco';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnDestroy {
  private _sBs = new SubSink();

  buttonData: SliderButtonData = {
    text: '',

    /** base colors on button */
    color: '#ffffff',
    bgColor: '#292A50',
    iconColor: '#000000',
    borderColor: '#ffffff',
    iconBackgroundColor: '#ffffff',

    /** hover effect styles on the button  */
    hoverColor: '',
    hoverBgColor: '',
    hoverIconColor: '',
    hoverBorderColor: '',
    hoverIconBackgroundColor: '',
  };

  constructor(private _translocoServ: TranslocoService) {
    this._sBs.sink = this._translocoServ
      .selectTranslate('ELEWA.PAGES.HOME.HERO-SECTION.BUTTON-TEXT')
      .subscribe((val: string) => (this.buttonData.text = val));
  }

  ngOnDestroy() {
    this._sBs.unsubscribe();
  }
}
