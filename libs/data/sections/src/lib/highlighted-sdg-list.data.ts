import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

const __highlightedSDGList: SDGCard[] = [
  {
    title: 'Quality Education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'fa-solid fa-book-open',
  },
  {
    title: 'Reduced Inequalities',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'fa-solid fa-arrows-up-down-left-right',
  },
  {
    title: 'Gender Equality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'fa-solid fa-arrows-to-circle',
  },
  {
    title: 'Economic Growth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'fa-solid fa-arrow-up-right-dots',
  },
  {
    title: 'Partnership For The Goals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor',
    icon: 'fa-solid fa-check-double',
  },
];

const __sdgSliderButton: SliderButtonData = {
  text: 'Learn More About SDG',
  bgColor: 'var(--elewa-website-color-primary-purple)',
  hoverBorderColor: 'var(--elewa-website-card-color)',
};

export { __highlightedSDGList, __sdgSliderButton };
