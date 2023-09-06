import { Component, Input } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ContentText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-one',
  templateUrl: './elewa-consultancy-about-one.component.html',
  styleUrls: ['./elewa-consultancy-about-one.component.scss'],
})
export class ElewaConsultancyAboutOneComponent {
  @Input() ImageAndText!: ImageAndText;

  // Use the ContentText type for the content input
  @Input() content: ContentText = {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
      'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
    ], // An array of strings
  };

  getLayoutClass(): string {
    // Check if ImageAndText is defined before accessing its properties
    if (this.ImageAndText && this.ImageAndText.imagePosition) {
      return this.ImageAndText.imagePosition === 'left'
        ? 'left-image'
        : 'right-image';
    }
    // Default layout class if ImageAndText is not defined or lacks 'imagePosition'
    return 'default-layout';
  }
}
