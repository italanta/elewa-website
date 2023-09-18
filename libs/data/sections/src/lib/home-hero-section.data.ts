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
  imageSrc:
    'https://images.unsplash.com/photo-1693924614710-fb0a4865cffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  title: '',
  visualisation: ImageVisualisation.Stacked,
  maxWidth: '',
};

export const __homeImageAndTextData = {
  heroText: __homeHeroText,
  buttonData: __homebuttonData,
  image: __homeHeroImg,
};
