import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const _images: ImageConfig[] = [
  {
    title: 'Pill',
    imageSrc:
      'https://cdn.pixabay.com/photo/2023/08/11/10/13/goat-8183257_640.png',
    visualisation: ImageVisualisation.Pill,
    maxWidth: '125px',
  },
  {
    title: 'Stacked',
    imageSrc:
      'https://cdn.pixabay.com/photo/2023/08/07/15/02/bird-8175276_640.jpg',
    visualisation: ImageVisualisation.stacked,
    maxWidth: '125px',
  },
  {
    title: 'Window',
    imageSrc:
      'https://cdn.pixabay.com/photo/2023/08/12/04/24/mabry-mill-8184715_640.jpg',
    visualisation: ImageVisualisation.Window,
    maxWidth: '125px',
  },
  {
    title: 'Card',
    imageSrc:
      'https://cdn.pixabay.com/photo/2023/02/21/23/04/ocean-7805312_640.jpg',
    visualisation: ImageVisualisation.Card,
    maxWidth: '125px',
  },
];
