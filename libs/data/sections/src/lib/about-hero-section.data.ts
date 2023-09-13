import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const __highlightedImage: ImageAndText[] = [
  {
    content: {
      title: 'Lorem ipsum dolorem sit eos',
      descriptions: [
        'Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor',
      ],
    },
    image: {
      imageSrc:
        'https://i.pinimg.com/564x/a3/5a/0f/a35a0f40ea03f9372f91f889941ad0d2.jpg',
      title: 'Image 1',
      maxWidth: '100%',
      visualisation: ImageVisualisation.Stacked,
    },
    imagePosition: 'left',
  },
  // Add more image and text configurations as needed
];

export function getLayoutClass(item: ImageAndText): string {
  if (item && item.imagePosition) {
    return item.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
  return 'default-layout';
}
