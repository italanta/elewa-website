import { NgModule } from '@angular/core';

import { provideTransloco, TranslocoModule } from '@ngneat/transloco';

import { TranslocoHttpLoader } from './transloco-loader';
import { environment } from '../environments/environment';

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['en', 'es'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: environment.production,
        },
        loader: TranslocoHttpLoader
      }),
  ],
})
export class TranslocoRootModule {}
