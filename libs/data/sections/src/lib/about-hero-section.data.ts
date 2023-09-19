import { HeroText } from '@elewa-website/models/schema/ui/texts';

import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';

const __aboutHeroText: HeroText = {
  title: 'Lorem ipsum dolorem sit eos',
  subtitle: '',
  description:
    'Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor.',
};

const __aboutHeroImg: ImageConfig = {
  imageSrc: 'assets/images/Union.png',
  title: '',
  visualisation: ImageVisualisation.Stacked,
  maxWidth: '',
};

export const __aboutImageAndTextData = {
  heroText: __aboutHeroText,
  image: __aboutHeroImg,
};
