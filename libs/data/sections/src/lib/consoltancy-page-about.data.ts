import { ImageAndText } from "@elewa-website/models/schema/ui/image-and-text";
import { ImageConfig, ImageVisualisation } from "@elewa-website/models/schema/ui/images";
import { ContentText } from "@elewa-website/models/schema/ui/texts";


export const _consultancyPageAbout: ImageAndText ={
    content:{
       title: "title",
       descriptions: ["lorem","ipsum"]
    }as ContentText,
    image:{
        imageSrc: "",
        title: "",
        visualisation: ImageVisualisation.Pill
    }as ImageConfig,
    imagePosition: 'left' 
}