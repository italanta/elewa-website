/**
 * Image interface type
 */
export interface ImageConfig {
  title: string
  imageSrc: string
  visualisation: ImageVisualisation
  maxWidth?: string
}

/**
 * Image interface enum
 */
export enum ImageVisualisation {
  Pill = 0,
  Stacked = 1,
  Window = 2,
  Card = 3
}