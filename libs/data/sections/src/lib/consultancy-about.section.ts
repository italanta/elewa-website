import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __consultancyDevAboutOne: ImageAndText = {
  content: {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
      'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; at a fraction of the cost of current solutions.',
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695277016/elewa-education-website/banner-images/MicrosoftTeams-image_14_qnvp0c.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __consultancyDevAboutTwo: ImageAndText = {
  content: {
    title: 'First-line training',
    descriptions: [
      'Our core expertise lies in training of first-line workers. We identify the “first line” as any group of professionals that are geographically spread and that interface directly with clients or organisation infrastructure.',
      'Through a smart mix of digital and human training modalities, we are able to up-skill the first-line impactfully, continuously, and affordabley.',
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695277018/elewa-education-website/banner-images/MicrosoftTeams-image_15_h0hesg.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};

export { __consultancyDevAboutOne, __consultancyDevAboutTwo };
