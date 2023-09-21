import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';

const __homeHeroText: HeroText = {
  title: 'Training at scale',
  subtitle: `Human-centered, meaningful and 
    enjoyable`,
};

const __homebuttonData: SliderButtonData = {
  text: 'Unlock your Potential',
  borderColor: 'black',
  hoverBorderColor: 'white'
};

const __homeHeroImg: ImageConfig = {
  imageSrc:
    'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695278309/elewa-education-website/Home-And-About/Union_2_2x_d7smks.png',
  title: '',
  visualisation: ImageVisualisation.Stacked,
  maxWidth: '',
};

export const __homeImageAndTextData = {
  heroText: __homeHeroText,
  buttonData: __homebuttonData,
  image: __homeHeroImg,
};
