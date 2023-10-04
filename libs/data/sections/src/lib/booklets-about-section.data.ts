import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __bookletsAboutOne: ImageAndText = {
  content: {
    title: 'Developing educational manuals and booklets',
    descriptions: [
      'After thorough research, planning, identifying the learning objectives, and target audience, expert content developers craft clear, engaging, and informative text complemented by visuals.',
      'Throughout this process, user-friendliness, relevance, and alignment with educational goals remain paramount. The end goal is an educational resource that simplifies complex concepts, making learning more accessible and effective for learners of all ages.',
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696419761/elewa-education-website/banner-images/MicrosoftTeams-image_32_piae0j.jpg',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __bookletsAboutTwo: ImageAndDetails = {
  cards: [
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410126/elewa-education-website/svgs/banner-svgs/concise_content_jalbzr.svg',
      title: 'Concise Content',
      description:
        'Like skilled sculptors, we carve text to its essence, guiding readers through concise and captivating narratives.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696411155/elewa-education-website/svgs/banner-svgs/engaging_siblwv.svg',
      title: 'Engaging Visuals',
      description:
        'We breathe life into booklets with visuals, turning abstract concepts into captivating journeys of understanding.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410126/elewa-education-website/svgs/banner-svgs/typography_nhxsmb.svg',
      title: 'Readable Typography',
      description:
        "We pick fonts wisely, guiding readers with consistent typography in our booklet's journey.",
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410126/elewa-education-website/svgs/banner-svgs/print_xdzgip.svg',
      title: 'Print Quality',
      description:
        "We enhance our booklet's charm with high-res images and professional printing for top-notch quality.",
    },
  ],

  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696419393/elewa-education-website/banner-images/MicrosoftTeams-image_31_y61xff.jpg',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};
export { __bookletsAboutOne, __bookletsAboutTwo };
