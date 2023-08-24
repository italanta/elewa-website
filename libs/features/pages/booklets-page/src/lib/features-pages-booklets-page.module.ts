import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';

@NgModule({
    imports: [CommonModule],
    exports: [BookletsPageComponent],
    declarations: [BookletsPageComponent]
})
export class FeaturesPagesBookletsPageModule {}
