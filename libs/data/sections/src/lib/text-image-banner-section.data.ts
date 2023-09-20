import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

const _section: ContentText = {
  title: 'Development of educational manuals and booklets',
  descriptions: [
    'After thorough research, planning, identifying the learning objectives, and target audience, expert content developers craft clear, engaging, and informative text complemented by visuals.',
    'Throughout this process, user-friendliness, relevance, and alignment with educational goals remain paramount. The end goal is an educational resource that simplifies complex concepts, making learning more accessible and effective for learners of all ages.'
  ],
};

const _imageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
    'https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

/** Booklets Page section one mock data */
export const __bookletsPageAboutOneData: ImageAndText = {
  content: _section,
  image: _imageData,
  imagePosition: 'left',
};
