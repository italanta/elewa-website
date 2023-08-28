import { Component, Input, OnInit } from '@angular/core';

import { _images as mockImages } from '@elewa-website/data/ui/images'
import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent implements OnInit {
  @Input() images!: ImageConfig[]

  ngOnInit() {
    this.images = mockImages
  }
}
