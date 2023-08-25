import { Component, Input } from '@angular/core';

import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent {
  private _imageConfig!: ImageConfig;

  /**
   * Property to store the class to be used string.
   */
  imageClassName = '';
  

  /**
   * Setter for the `imageConfig` input property.
   * This method is automatically called when the `imageConfig` input is set externally.
   * It updates the private `_imageConfig` property and formats the price using commas.
   * 
   * @param {PriceItem} value - The new value for the `imageConfig` input.
   */
  @Input()
  set imageConfig(value: ImageConfig) {
    this._imageConfig = value;
    this.imageClassName = this.getClassName(value.visualisation);
  }

  /**
   * Getter for the `imageConfig` input property.
   * 
   * @returns {imageConfig} The current value of the `imageConfig` input.
   */
  get imageConfig(): ImageConfig {
    return this._imageConfig;
  }

   /**
   *  function to check visualisation passed and it returns the classname that will be used.
   * 
   * @param {any} visualisations - The number to be converted.
   * @returns {string} The className string.
   */

  getClassName(visualisations: any){
    let className = ''
    if (visualisations == 0 || visualisations === 'pill'){
      className= "image-pill"
    }else if(visualisations == 1 || visualisations === 'stacked'){
      className = 'image-stacked'
    }else if(visualisations == 2 || visualisations === 'Window'){
      className = 'image-window'
    }else if(visualisations == 3 || visualisations === 'card'){
      className = 'image-card'
    }else{
      className = ''
    }
    return className
  }


}
