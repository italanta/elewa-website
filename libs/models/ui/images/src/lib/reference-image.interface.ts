/**
 * Image that depicts a logo which references a client or important project.
 */
export interface ReferenceImage
{
  /** Source of the image to load. */
  src: string;
  /** Link to navigate too on click. */
  actionUrl: string;
  /** Whether I want this image gray scaled or not. */
  isGray: boolean;
}
