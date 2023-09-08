import { PriceItem } from "@elewa-website/models/schema/ui/cards";

export const __highlightedPricingList: PriceItem[] = [
    {
        title: 'Elewa model',
        amount: 1500,
        subTitle: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet. Ut sunt minus qui recusandae possimus est alias dolorum sit rerum harum non rerum assumenda At dolore cupiditate.',
        sliderButton: {
            text: 'Choose Plan',
          },
          amountColor: '#000000', 
          textColor: '#000000',  
          backgroundColor: '#F4EDFD' 
        },{
        title: 'Gold',
          amount:1500, 
          subTitle: 'Exclusive Features',
          description: 'Lorem ipsum dolor sit amet. Ut sunt minus qui recusandae possimus est alias dolorum sit rerum harum non rerum assumenda At dolore cupiditate.',
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
        }
]