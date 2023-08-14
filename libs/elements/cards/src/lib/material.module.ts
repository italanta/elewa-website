import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon'

const MaterialComponents=[
    MatIconModule,
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {}