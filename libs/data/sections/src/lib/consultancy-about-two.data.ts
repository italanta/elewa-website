import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const __highlightedImageData: ImageAndText[] = [
  {
    content: {
      title: 'First-line training',
      descriptions: [
        'Our core expertise lies in training of first-line workers. We identify the “first line” as any group of professionals that are geographically spread and that interface directly with clients or organisation infrastructure.',
        'Through a smart mix of digital and human training modalities, we are able to up-skill in the first line in an impactful, continuous and affordable manner.',
      ], 
    },
    image: {
      imageSrc: 'https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/keyboard.jpg?1566398203',
      title: 'Image 2',
      maxWidth: '600',
      visualisation: ImageVisualisation.Pill,
    },
    imagePosition: 'right',
  },

  
];
