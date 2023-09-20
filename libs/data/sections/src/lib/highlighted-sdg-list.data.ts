import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

const __highlightedSDGList: SDGCard[] = [
  {
    title: 'Quality Education',
    description:
      'Our training ensures inclusive, quality education, expands access, and enhances learning outcomes.',
    icon: 'assets/svgs/Quality education.svg',
  },
  {
    title: 'Reduced Inequalities',
    description:
      'We endeavour to reduce education inequalities, targeting access, outcomes, and resources for disadvantaged groups.',
    icon: 'assets/svgs/Reduced inequalities.svg',
  },
  {
    title: 'Gender Equality',
    description:
      'We strive to empower women and girls, becasue we understand it is vital for equitable, safe education.',
    icon: 'assets/svgs/Gender equality.svg',
  },
  {
    title: 'Economic Growth',
    description:
      'We seek to foster economic growth by upskilling the entering and current workforce to increase productivity.',
    icon: 'assets/svgs/Economic growth.svg',
  },
  {
    title: 'Partnership For The Goals',
    description:
      'We seek to forge global partnerships which are crucial for successful education, uniting governments, organizations, and sectors.',
    icon: 'assets/svgs/Partnership for the goals.svg',
  },
];

const __sdgSliderButton: SliderButtonData = {
  text: 'Learn More About SDG',
  bgColor: 'var(--elewa-website-color-primary-purple)',
  hoverBorderColor: 'var(--elewa-website-card-color)',
};

export { __highlightedSDGList, __sdgSliderButton };
