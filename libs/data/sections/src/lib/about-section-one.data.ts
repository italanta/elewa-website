import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const _section: ContentText = 

  {
    title: 'our approach to content development',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  }


export const _imageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
    'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

export const _imageAndTextData = {
  contentData: _section,
  imageData: _imageData,
};