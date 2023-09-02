import { Component, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { filter } from 'rxjs';
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
    this._sBs.sink = this._translocoServ.load('en').subscribe();
    this._sBs.sink = this._translocoServ.events$
      .pipe(filter((event) => event.type === 'translationLoadSuccess'))
      .subscribe(() => {
        this.buttonData.text = this._translocoServ.translate(
          'ELEWA.PAGES.HOME.HERO-SECTION.BUTTON-TEXT'
        );
      });
  }

  ngOnDestroy() {
    this._sBs.unsubscribe();
  }
}
