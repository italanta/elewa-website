import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const __highlightedImage: ImageAndText[] = [
  {
    content: {
      title: 'People at the center',
      descriptions: [
        'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
        'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
      ], // An array of strings
    },
    image: {
      imageSrc: 'https://i.pinimg.com/564x/51/63/be/5163beead1ce8cd8c0b238ec6aa9430e.jpg',
      title: 'Image 1',
      maxWidth: '500',
      visualisation: ImageVisualisation.Pill,
    },
    imagePosition: 'left',
  },

  // Add more image and text configurations as needed
];

// Define a separate function for the getLayoutClass method
export function getLayoutClass(item: ImageAndText): string {
  // Implement your logic to determine the layout class based on the item
  // For example, you can access item.imagePosition and return a class name accordingly.
  if (item && item.imagePosition) {
    return item.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
  // Return a default layout class if needed
  return 'default-layout';
}
