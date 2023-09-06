import { InfoCard } from "@elewa-website/models/schema/ui/cards"
import { ImageConfig } from "@elewa-website/models/schema/ui/images"

export interface ImageAndDetails {
  cards: InfoCard[]
  image: ImageConfig
  imagePosition: 'left' | 'right'
}
