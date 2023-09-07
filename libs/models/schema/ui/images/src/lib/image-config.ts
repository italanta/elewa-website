export interface ImageConfig {
  title: string
  imageSrc: string
  visualisation: ImageVisualisation
  maxWidth?: string
  maxHeight?: string
}

export enum ImageVisualisation {
    Pill = 0,
    Stacked = 1,
    Window = 2,
    Card = 3
  }