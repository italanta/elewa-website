import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

const __highlightedSDGList: SDGCard[] = [
  {
    title: 'Quality Education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'assets/svgs/Quality education.svg',
  },
  {
    title: 'Reduced Inequalities',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'assets/svgs/Reduced inequalities.svg',
  },
  {
    title: 'Gender Equality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'assets/svgs/Gender equality.svg',
  },
  {
    title: 'Economic Growth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'assets/svgs/Economic growth.svg',
  },
  {
    title: 'Partnership For The Goals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'assets/svgs/Partnership for the goals.svg',
  },
];

const __sdgSliderButton: SliderButtonData = {
  text: 'Learn More About SDG',
  bgColor: 'var(--elewa-website-color-primary-purple)',
  hoverBorderColor: 'var(--elewa-website-card-color)',
};

export { __highlightedSDGList, __sdgSliderButton };
