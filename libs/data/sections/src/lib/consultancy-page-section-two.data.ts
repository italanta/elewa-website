import { ImageConfig, ImageVisualisation } from "@elewa-website/models/schema/ui/images";
import { HeroText } from "@elewa-website/models/schema/ui/texts";


export const __consultancyAboutTwo: HeroText = {
  title: 'Firstline Training',
  description:
  `
    Our core expertise lies in training of first-line workers
    We identify the "first-line" as any group of professionals that are
    geographically spread...
    `
}

// Image data
export const __consultancyImageConfig: ImageConfig = {
  imageSrc: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   // Add image URL
  title: '',      // Add image title
  visualisation: ImageVisualisation.Pill, // You can set this to Stacked or any other value as needed
  maxWidth: '803px',
}
