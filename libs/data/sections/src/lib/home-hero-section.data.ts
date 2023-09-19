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
};

const __homeHeroImg: ImageConfig = {
  imageSrc:'assets/images/Union.png',
  title: '',
  visualisation: ImageVisualisation.Stacked,
  maxWidth: '',
};

export const __homeImageAndTextData = {
  heroText: __homeHeroText,
  buttonData: __homebuttonData,
  image: __homeHeroImg,
};
