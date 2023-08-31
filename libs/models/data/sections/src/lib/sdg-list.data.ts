import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

export const __highlightedSDGList: InfoCard[] = [
  {
    title: 'Quality Education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'https://thenounproject.com/api/private/icons/3262972/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0', // You can specify the icon URL or path here
  },
  {
    title: 'Economic Growth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'https://thenounproject.com/api/private/icons/4795689/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0', // You can specify the icon URL or path here
  },
  {
    title: 'Reduced Inequalities',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'https://thenounproject.com/api/private/icons/3194319/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0',
  },
  {
    title: 'Parnership fo the Goals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'https://thenounproject.com/api/private/icons/5750943/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0',
  },
  {
    title: 'Gender Equality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'https://thenounproject.com/api/private/icons/1401165/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0',
  },
  // Add more SDG items as needed
];

export const __mockSliderButtonData: SliderButtonData = {
  text: 'Learn more about SDG',
  bgColor: 'transparent',
  color: 'var(--elewa-website-color-primary-white)',
  hoverBgColor: 'white',
  hoverColor: 'var(--elewa-website-color-primary-black)',
  borderColor: 'var(--elewa-website-color-primary-white)',
  iconColor: 'var(--sdg-card-background-color)',
  iconBackgroundColor: 'var(--elewa-website-color-primary-white)',
  hoverBorderColor: 'var(--elewa-website-color-primary-black)',
  hoverIconColor: 'var(--elewa-website-color-primary-white)',
  hoverIconBackgroundColor: 'var(--elewa-website-color-primary-black)',
};
