import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const _section1Content: ContentText[] = [
  {
    title: 'From here to the world',
    descriptions: [
      "Getting thousands of people up to speed can be hard and expensive. But, it doesn't have to be",
      'Elewa is an education partner which develops the kind of training that works at scale. This without losing track of what matters most, people!',
      'Personalized, enjoyable and effective training solutions at scale. Technology enabled; Human powered.',
    ],
  },
  {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs.',
      'Through in-depth research, we work with your organization at different levels to understand how people live and learn. Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be reused every time a training need arises; At a fraction of the cost of current solutions.',
    ],
  },
];

export const _section1ImageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
    'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

export const _imageAndTextData = {
  contentData: _section1Content,
  imageData: _section1ImageData,
};