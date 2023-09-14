import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

const _section1Content: ContentText = {
  title: 'our approach to content development',
  descriptions: [
    ' The secret to succesfull education sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor.',
  ],
};

const _section1ImageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
    'https://media.gettyimages.com/id/1357935536/photo/happy-businesswoman-sitting-on-her-desk-using-her-tablet.jpg?s=612x612&w=0&k=20&c=XISUq0dPqYqpfL1wnUX0L0AHTngKJ9JS8zFSoODvvTc=',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

/** About Page section one mock data */
export const _aboutPageAboutOneData: ImageAndText = {
  content: _section1Content,
  image: _section1ImageData,
  imagePosition: 'left',
};
