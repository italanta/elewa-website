import { PriceItem } from "@elewa-website/models/schema/ui/cards";

// Define your mock data for pricing list
export const __highlightedPricingList: PriceItem[] = [
  {
    title: 'Basic Plan',
    amount: 100, // Example amount
    subTitle: 'Standard Features',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sliderButton: {
      text: 'Choose Plan',
    },
    amountColor: '#00FF00', // Example amount color
    textColor: '#000000',   // Example text color
    backgroundColor: '#FFFFFF' // Example background color
  },
  {
    title: 'Premium Plan',
    amount: 200, // Example amount
    subTitle: 'Advanced Features',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    sliderButton: {
      text: 'Choose Plan',
    },
    amountColor: '#FF0000', // Example amount color
    textColor: '#FFFFFF',   // Example text color
    backgroundColor: '#000000' // Example background color
  },
  // Add more pricing items as needed
];
