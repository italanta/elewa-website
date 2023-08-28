export interface ImageConfig {
  title: string
  imageSrc: string
  visualisation: ImageVisualisation
  maxWidth?: string
}

export enum ImageVisualisation {
  Pill = 0,
  stacked = 1,
  Window = 2,
  Card = 3
}