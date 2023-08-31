import { Component } from '@angular/core';


// socials urls
const ig = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg"
const linkedIn = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg"
const fb ="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg"


@Component({
  selector: 'elewa-website-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})


export class FooterComponent  {
  fb_URL = fb;
  ig_URL = ig;
  linkedIn_URL = linkedIn;

  //Button data info
  buttonData = {
    text: 'Unlock your potential ', // Fill the require
    bgColor: 'transparent',
    color: 'white',
    iconBackgroundColor: 'white',
    hoverIconColor: 'black',
    hoverIconackgroundColor: 'black',
    hoverBgColor: 'white',
    hoverColor:'black',
    iconColor: 'black'
  }
}
