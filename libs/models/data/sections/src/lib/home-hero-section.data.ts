import { ButtonData, SliderButtonData } from "@elewa-website/models/schema/ui/buttons";
import { HeroText } from "@elewa-website/models/schema/ui/texts";
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';


//Wording of the button
export const __homeButtonData: SliderButtonData[] = [ {
  text: 'Unlock your potential ',
} ];

// Wording of the text section
export const __homeHerotexts: HeroText[] = [
  {
    title: "Training at scale",
    subtitle: `Human-centered, meaningful and enjoyable`
  }
];

// Add the imageConfig property
export const __homeImageConfig: ImageConfig[] = [
  {
    imageSrc: '',   // Add image URL
    title: '',      // Add image title
    visualisation: ImageVisualisation.Stacked, // You can set this to Stacked or any other value as needed
    maxWidth: '803px',
    maxHeight: '796px',
  }
];