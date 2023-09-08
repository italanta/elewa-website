import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';


export interface ImageAndText {

    /* configs from external contextText + ImageConfig combined to with imagePosition...to create an image and text. **/
    content: ContentText
    image: ImageConfig
    imagePosition: 'left' | 'right'
}
