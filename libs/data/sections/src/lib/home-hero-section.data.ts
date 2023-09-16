import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const homeHeroText: HeroText = {
    title: 'Training at scale',
    description: `Human-centered, meaningful and 
    enjoyable`,
};

export const buttonData: SliderButtonData = {
    text: "Unlock your Potential"
};

export const homeHeroImg: ImageConfig = {
    imageSrc: 'https://i.pinimg.com/564x/d0/f4/f9/d0f4f9ccf345f6d8862c506c0b3a6378.jpg',
    title: '',
    visualisation: ImageVisualisation.Stacked,
    maxWidth: ''
}