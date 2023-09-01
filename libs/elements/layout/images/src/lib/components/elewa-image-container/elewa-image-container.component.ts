import { Component } from '@angular/core';
import { ImageConfig } from '../../../../../../../models/schema/ui/images/image-config.interface';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  pill: ImageConfig = {
    title: 'Pill',
    imageSrc: 'https://media.gettyimages.com/id/1346973410/photo/young-woman-at-a-library.jpg?s=612x612&w=0&k=20&c=PW6KYwtS3oUx1mPcbfyqDcZotnyjFO-cwfbOsyG2ERk=',
    visualisation: 0,
  };
  stacked: ImageConfig = {
    title: 'Stacked',
    imageSrc: 'https://media.istockphoto.com/id/1178524829/photo/young-woman-making-choice-donut-or-apple.jpg?s=612x612&w=0&k=20&c=WeZ6-DQ8npDAhDNDZkcE48gtFFbqfTIIvpAfSfsh0Uo=',
    visualisation: 1,
  };
  window: ImageConfig = {
    title: 'Window',
    imageSrc: 'https://media.gettyimages.com/id/1392205193/photo/brazilian-man-working-and-using-technology-in-the-field.jpg?s=2048x2048&w=gi&k=20&c=3ACQa-OGvMCBa-bJ0TjeVb-Y820Ys2IEwimShEDFYm0=',
    visualisation: 2,
  };
  card: ImageConfig = {
    title: 'Card',
    imageSrc: 'https://media.gettyimages.com/id/1017628288/photo/happy-african-family-together-using-laptop.jpg?s=2048x2048&w=gi&k=20&c=fcjastVF8goNKDaqdzqzqMEW9Xf6xQKMCWH2wEAy2WA=',
    visualisation: 3,
  };
}
