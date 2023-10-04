import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __contentDevAboutOne: ImageAndText = {
  content: {
    title: 'Human Centred Design: Putting people first',
    descriptions: [
      'By stepping into the shoes of users, we unleash our creativity to craft solutions that not only work but also feel like second nature, sparking joy and making a real impact.',
      "We work with a diverse group, bringing forth a symphony of insights and ideas. This creative journey doesn't end; it's a continuous evolution, adapting to the ever-changing audience needs."
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696420569/elewa-education-website/banner-images/MicrosoftTeams-image_18_xl9lna.jpg',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __contentDevAboutTwo: ImageAndDetails = {
  cards: [
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410127/elewa-education-website/svgs/banner-svgs/research_h8lxa7.svg',
      title: 'Research',
      description:
        "We're avid explorers of user insights. It's not just about hearing; it's about feeling the heartbeat of their needs.",
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410128/elewa-education-website/svgs/banner-svgs/Ideation_gal92e.svg',
      title: 'Ideation',
      description:
        'We dive into creative brainstorming sessions to spark fresh, innovative design ideas.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410128/elewa-education-website/svgs/banner-svgs/Prototyping_tif0vz.svg',
      title: 'Prototyping',
      description:
        'This is the canvas where we turn our wild ideas into tangible realities.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410127/elewa-education-website/svgs/banner-svgs/Testing_wtqk9j.svg',
      title: 'Testing',
      description:
        'This is our compass, guiding us to refine and perfect user experiences through real-world trials.',
    },
  ],
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696421694/elewa-education-website/banner-images/MicrosoftTeams-image_28_1_zvs9gc.png',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};

export { __contentDevAboutOne, __contentDevAboutTwo };
