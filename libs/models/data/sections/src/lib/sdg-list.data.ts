import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
export const __highlightedSDGList: InfoCard[] = [
  {
    title: 'Quality Education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'sdg1.svg', // You can specify the icon URL or path here
  },
  {
    title: 'Economic Growth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'sdg2.svg',
  },
  {
    title: 'Reduce Inequalities',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'sdg3.svg',
  },
  {
    title: 'Parnership fo the Goals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'sdg4.svg',
  },
  {
    title: 'Gender Equality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'sdg5.svg',
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
