import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';

export const _consultancyPageAbout: ImageAndText = {
  content: {
    title: 'people at the center',
    descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae, porro aliquam soluta blanditiis ', 'quia animi voluptates doloremque magnam quis quibusdam, assumenda, cupiditate recusandae aut et! Esse facere hic iusto!'],
  },
  
  image: {
    imageSrc: 'https://media.istockphoto.com/id/1322139094/photo/multiethnic-colleagues-sitting-at-desk-looking-at-laptop-computer-in-office.jpg?s=612x612&w=0&k=20&c=xrGP_nwtcdaZF8heKJ_FiEqnuqWxv1A7i71YZLXxSaE=',
    title: 'lorem',
    visualisation: ImageVisualisation.Pill,
  },
  imagePosition: 'left',
};
