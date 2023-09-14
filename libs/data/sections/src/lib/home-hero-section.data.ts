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
    imageSrc: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   // Add image URL
    title: 'image',      // Add image title
    visualisation: ImageVisualisation.Stacked, // You can set this to Stacked or any other value as needed
    maxWidth: '803px',
  }
];