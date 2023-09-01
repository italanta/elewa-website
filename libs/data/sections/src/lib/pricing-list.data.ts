import { PriceItem } from "@elewa-website/models/schema/ui/cards";
  export const __highlightedPricingList: PriceItem[]=[
    {title: 'Bronze',
    amount:500, 
    subTitle: 'Basic Features',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sliderButton: {
      text: 'Choose Plan',    
    },
    amountColor: '#000000',
    textColor: '#000000',  
    backgroundColor: '#F4EDFD' 
  },
  {
    title: 'Silver',
    amount: 1000, 
    subTitle: 'Advanced Features',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    sliderButton: {
      text: 'Choose Plan',
    },
    amountColor: '#000000', 
    textColor: '#000000',  
    backgroundColor: '#F4EDFD' 
  },{
  title: 'Gold',
    amount:1500, 
    subTitle: 'Exculisive Features',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    sliderButton: {
      text: 'Choose Plan',
      bgColor:'white',
      color:'black',
      hoverBgColor:"black",
      hoverColor:'white',     

    },
    amountColor: '#FFFFFF',
    textColor: '#FFFFFF',  
    backgroundColor: '#292A50' 
  },
    
  ]