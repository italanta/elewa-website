import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __convLearningAboutOne: ImageAndText = {
  content: {
    title: 'People at the center',
    descriptions: [
      'People are the secret to successful education programs. Through in-depth research, we work with your organization at different levels to understand (“elewa”) how people live and learn.',
      'Based on decades of research, this understanding allows us to co-create strong learning networks within your organization. Networks that can be re-used every time a training need arises; At a fraction of the cost of current solutions.',
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695276990/elewa-education-website/banner-images/MicrosoftTeams-image_9_epj9ah.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __convLearningAboutTwo: ImageAndDetails = {
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
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695277011/elewa-education-website/banner-images/MicrosoftTeams-image_13_kpt3rk.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};

export { __convLearningAboutOne, __convLearningAboutTwo };
