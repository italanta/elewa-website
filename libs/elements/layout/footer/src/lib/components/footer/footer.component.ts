import { Component } from '@angular/core';
import { footerLinks, socialMedia } from '@elewa-website/data/ui/content-text';

@Component({
  selector: 'elewa-website-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerLinks = footerLinks
  socialMedia = socialMedia
}
