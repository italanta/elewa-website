import { ContentText } from "@elewa-website/models/schema/ui/texts";
import { ImageConfig, ImageVisualisation } from "@elewa-website/models/schema/ui/images";
import { ImageAndText } from "@elewa-website/models/schema/ui/image-and-text";


const __contentText :ContentText = 
  {
    title: 'Firstline Training',
    descriptions: [
      `
      Our core expertise lies in training of first-line workers
      We identify the "first-line" as any group of professionals that are
      geographically spread...
      `
    ]
  }


const __imageConfig: ImageConfig = 
  {
    imageSrc: '',   // Add image URL
    title: '',      // Add image title
    visualisation: ImageVisualisation.Pill, // You can set this to Stacked or any other value as needed
    maxWidth: '803px',
  }


export const __imageAndTextData: ImageAndText[] = [
  {
    content: __contentText,
    image: __imageConfig,
    imagePosition: 'right'
  }
]