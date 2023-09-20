import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';

const cards: InfoCard[] = [
  {
    title: 'Course Design',
    description:
      'We conceive, plan, and create effective learning experiences.',
  },
  {
    title: 'Course Production',
    description:
      'We put together the awesome content we design for educational programs.',
  },
  {
    title: 'Course Operations',
    description:
      'We manage all logistics for the effective delivery of our designed content.',
  },
  {
    title: 'Course Evaluation',
    description:
      'We assess the effectiveness of our content and iterate to improve learning.',
  },
];

const imageData: ImageConfig = {
  title: 'img',
  imageSrc:
    'https://images.unsplash.com/photo-1693693928634-658db91ca093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  visualisation: 0,
};

export const __imageAndDetails: ImageAndDetails = {
  cards: cards,
  image: imageData,
  imagePosition: 'right',
};
