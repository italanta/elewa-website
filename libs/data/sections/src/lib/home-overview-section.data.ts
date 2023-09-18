import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

const __overviewContentText: ContentText = {
  title: 'From here to the world',
  descriptions: [
    'Getting thousands of people up to speed can be hard and expensive. But, it doesn’t have to be.',
    'Elewa is an education partner which develops the kind of training that work at scale. This without losing track of what matters most, people!',
    'Personalised, enjoyable and effective training solutions at scale. Technology enabled; Human powered.',
  ],
};

const __overviewImageConfig: ImageConfig = {
  title: '',
  imageSrc:
    'https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
  visualisation: ImageVisualisation.Window,
};

export const __overviewImageAndTextData: ImageAndText = {
  content: __overviewContentText,
  image: __overviewImageConfig,
  imagePosition: 'left',
};