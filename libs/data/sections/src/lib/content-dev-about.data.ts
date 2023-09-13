import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __contentDevAboutOne: ImageAndText = {
  content: {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
      'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
    ],
  },
  image: {
    imageSrc:
      'https://images.unsplash.com/photo-1522896736962-5f80685ea3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __contentDevAboutTwo: ImageAndText = {
  content: {
    title: 'Frist-line training',
    descriptions: [
      'Our core expertise lies in training of first-line workers. We identify the “first line” as any group of professionals that are geographically spread and that interface directly with clients or organisation infrastructure. ',
      'Through a smart mix of digital and human training modalities, we are able to up-skill in the first line in an impactful, continuous and affordable manner.',
    ],
  },
  image: {
    imageSrc:
      'https://images.unsplash.com/photo-1522896736962-5f80685ea3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};

export { __contentDevAboutOne, __contentDevAboutTwo };
