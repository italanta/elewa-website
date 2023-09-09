import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

export const _section1Content: ContentText =

  {
    title: 'our approach to content development',
    descriptions: [
     ' The secret to succesfull education sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum quia dolor.'
    ],
  }
export const _section1ImageData: ImageConfig = {
  title: 'Image 1',
  imageSrc:
  'https://media.gettyimages.com/id/1357935536/photo/happy-businesswoman-sitting-on-her-desk-using-her-tablet.jpg?s=612x612&w=0&k=20&c=XISUq0dPqYqpfL1wnUX0L0AHTngKJ9JS8zFSoODvvTc=',
  visualisation: ImageVisualisation.Pill,
  maxWidth: '100%',
};

export const _imageAndTextData = {
  contentData: _section1Content,
  imageData: _section1ImageData,
};  
