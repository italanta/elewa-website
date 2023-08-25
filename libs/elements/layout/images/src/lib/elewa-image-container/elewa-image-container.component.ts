import { Component } from '@angular/core';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  pill: ImageConfig = {
    title: 'Pill',
    imageSrc: 'https://www.riverty.com/4a5658/globalassets/media-images/testbench/gettyimages-1346973410.jpg?width=627&height=594&rmode=crop&format=webp&hmac=c841af730758dd3e28bf0486d01354d1e22616ed41cd5a684281141d456b9d74',
    visualisation: 0,
  };
  stacked: ImageConfig = {
    title: 'Stacked',
    imageSrc: 'https://media.istockphoto.com/id/1178524829/photo/young-woman-making-choice-donut-or-apple.jpg?s=612x612&w=0&k=20&c=WeZ6-DQ8npDAhDNDZkcE48gtFFbqfTIIvpAfSfsh0Uo=',
    visualisation: 1,
  };
  window: ImageConfig = {
    title: 'Window',
    imageSrc: 'https://media.gettyimages.com/id/1304948590/photo/male-botanist-examining-tomatoes-in-greenhouse.jpg?s=612x612&w=0&k=20&c=E2RLQkoO3o2zC4S0gPP6FxrTOKGpG4JOulYWEiWsK8M=',
    visualisation: 2,
  };
  card: ImageConfig = {
    title: 'Card',
    imageSrc: 'https://static.wixstatic.com/media/84f126_248031143ce4430d8b67a82efae73ffc~mv2.jpeg/v1/fill/w_1269,h_547,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84f126_248031143ce4430d8b67a82efae73ffc~mv2.jpeg',
    visualisation: 3,
  };
}
