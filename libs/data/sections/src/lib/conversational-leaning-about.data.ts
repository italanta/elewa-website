import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

const __convLearningAboutOne: ImageAndText = {
  content: {
    title: 'Empowering minds as learners and educators',
    descriptions: [
      "It's not about feeding minds - it's about igniting sparks of deeper understanding through critical thinking and collaboration.",
      "You don't just consume information, you shape your educational journey through lively dialogues and discussions.",
      "You become an active architect of your learning, crafting your path to knowledge in every conversation.",
    ],
  },
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696420053/elewa-education-website/banner-images/MicrosoftTeams-image_34_al6k0e.jpg',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};

const __convLearningAboutTwo: ImageAndDetails = {
  cards: [
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410128/elewa-education-website/svgs/banner-svgs/accessibility_qymqyk.svg',
      title: 'Accessibility',
      description:
        'Unlock education anytime, anywhere with just your mobile and the internet.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410126/elewa-education-website/svgs/banner-svgs/personalization_nt5rd1.svg',
      title: 'Personalisation',
      description:
        'Embark on your personalized learning journey, where tailored paths cater to your unique needs.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410128/elewa-education-website/svgs/banner-svgs/interactivity_diclsq.svg',
      title: 'Interactivity',
      description:
        'Immerse yourself in dynamic conversations that transform learning into an interactive and engaging experience',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696410128/elewa-education-website/svgs/banner-svgs/scalability_uuawj3.svg',
      title: 'Scalability',
      description:
        'Efficiently serve diverse learning needs with a cost-effective solution that accommodates large groups of learners simultaneously.',
    },
  ],
  image: {
    imageSrc:
      'https://res.cloudinary.com/dyl3rncv3/image/upload/v1696420503/elewa-education-website/banner-images/pexels-ketut-subiyanto-4353618_ycf9mo.jpg',
    title: 'Image 1',
    maxWidth: '500',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'right',
};

export { __convLearningAboutOne, __convLearningAboutTwo };
