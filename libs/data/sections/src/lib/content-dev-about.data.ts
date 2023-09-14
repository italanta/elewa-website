import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const __contentDevAboutOne: ImageAndText = {
  content: {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
      'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
    ], // An array of strings
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
