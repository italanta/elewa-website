import { PriceItem } from "@elewa-website/models/schema/ui/cards";
/* Add sample data to be used by the pricing card*/

export const __highlightedPricingList: PriceItem[] = [
    {
        title: "Elewa Bronze model",
        amount: 500,
        subTitle: "Design support",
        description: "We empower you to design your own content by offering you 2 expert-led design workshops and marginal support while allowing you to leverage our LMS to deliver, host, and monitor your content.",
        amountColor:"#292a50",
        textColor:"#000000",
        backgroundColor:"#f4edfd",
        sliderButton: {
            text: "Unlock your potential"
        }
    },
    {
        title: "Elewa Silver Model",
        amount: 1000,
        subTitle: "Co-design",
        description: "Let's design amazing content together! This package offers you up to 3 collaborative design sessions in which to design, create and deploy content. Our LMS is the vehicle used for delivering and monitoring content progress.",
        amountColor:"#292a50",
        textColor:"#000000",
        backgroundColor:"#f4edfd",
        sliderButton: {
            text: "Unlock your potential"
        }
    },
    {
        title: "Elewa Gold Model",
        amount: 1250,
        subTitle: "In-house content design",
        description: "Relax and let us do all the heavy lifting! We will design, create, and deploy content on our LMS ensuring maximum alignment through weekly check-ins, and a rigorous content approval process. Our LMS deliver, and monitor performance.",
        amountColor:"#ffffff",
        textColor:"#ffffff",
        backgroundColor:"#292a50",
        sliderButton: {
            text: "Unlock your potential",
            bgColor:"#fff",
            color: "#000"
        }
    }
  
];

