import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

export const _section: ContentText = {
  title: 'Development of educational manuals and booklets',
  descriptions: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
};

export const _imageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
    'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

export const _imageAndTextData: ImageAndText = {
  content: _section,
  image: _imageData,
  imagePosition: 'left',
};
