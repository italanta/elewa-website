import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const __highlightedImage: ImageAndText[] = [
  {
    content: {
      title: 'From here to the world',
      descriptions: [
        'Getting thousands of people up to speed can be hard and expensive. But, it doesn’t have to be.',
        'Elewa is an education partner which develops the kind of training that work at scale. This without losing track of what matters most, people!',
        'Personalised, enjoyable and effective training solutions at scale. Technology enabled; Human powered.',
      ], // An array of strings
    },
    image: {
      imageSrc: 'https://i.pinimg.com/564x/fb/e3/88/fbe388bd71911921de078cf763108cca.jpg',
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