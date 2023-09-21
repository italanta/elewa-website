import { HeroText } from '@elewa-website/models/schema/ui/texts';

import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';

const __aboutHeroText: HeroText = {
  title: 'Who are we?',
  subtitle: '',
  description: `Eight years ago, Elewa began turbocharging talent via <strong>blended learning</strong> (We train thousands of professionals using a dynamic mix of digital and in-person training.)
   and <strong>unique apprenticeships</strong>(Our unique apprenticeship program transforms junior tech interns into senior developers).`,
};

const __aboutHeroImg: ImageConfig = {
  imageSrc: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1695278309/elewa-education-website/Home-And-About/Union_2_2x_d7smks.png',
  title: '',
  visualisation: ImageVisualisation.Stacked,
  maxWidth: '',
};

export const __aboutImageAndTextData = {
  heroText: __aboutHeroText,
  image: __aboutHeroImg,
};
