import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __bookletsAboutOne: ImageAndText = {
  content: {
    title: 'Development of educational manuals and booklets',
    descriptions: [
      'After thorough research, planning, identifying the learning objectives, and target audience, expert content developers craft clear, engaging, and informative text complemented by visuals.',
      'Throughout this process, user-friendliness, relevance, and alignment with educational goals remain paramount. The end goal is an educational resource that simplifies complex concepts, making learning more accessible and effective for learners of all ages.',
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695277007/elewa-education-website/banner-images/MicrosoftTeams-image_12_joxqos.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __bookletsAboutTwo: ImageAndDetails = {
  cards: [
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
  ],
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695276998/elewa-education-website/banner-images/MicrosoftTeams-image_10_pgflw2.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};
export { __bookletsAboutOne, __bookletsAboutTwo };
