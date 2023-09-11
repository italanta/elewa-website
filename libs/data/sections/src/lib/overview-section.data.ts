import { ContentText } from "@elewa-website/models/schema/ui/texts";
import { ImageConfig, ImageVisualisation } from "@elewa-website/models/schema/ui/images";
import { ImageAndText } from "@elewa-website/models/schema/ui/image-and-text";

// Content text data
const __overviewContentText: ContentText =
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

// Image data
const __overviewImageConfig: ImageConfig =
{
  imageSrc: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   // Add image URL
  title: '',      // Add image title
  visualisation: ImageVisualisation.Pill, // You can set this to Stacked or any other value as needed
  maxWidth: '803px',
}

// Image and text data
export const __overviewImageAndTextData: ImageAndText =
{
  content: __overviewContentText,
  image: __overviewImageConfig,
  imagePosition: 'left',
}