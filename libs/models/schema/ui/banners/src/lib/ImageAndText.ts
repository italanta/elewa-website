import { ContentText } from "@elewa-website/models/schema/ui/texts"
import { ImageConfig } from "@elewa-website/models/schema/ui/images"

export interface ImageAndText {
  content: ContentText
  image: ImageConfig
  imagePosition: 'left' | 'right'
}
