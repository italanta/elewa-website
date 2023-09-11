import { InfoCard } from "@elewa-website/models/schema/ui/cards"
import { ImageConfig } from "@elewa-website/models/schema/ui/images"
import { ImageAndDetails } from "@elewa-website/models/schema/ui/banners"

const cards: InfoCard[]=[
    {
        title:"Course Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor"
    },
    {
        title:"Course Production",
        description:"Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor"
    },
    {
        title:"Course Operations",
        description:"Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor"
    }, {
        title:"Course Evaluation",
        description:"Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor"
    }

]

const imageData: ImageConfig = {
    title:"img",
    imageSrc:"https://images.unsplash.com/photo-1693693928634-658db91ca093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    visualisation: 0

}

export const __imageAnddetails: ImageAndDetails= {
    cards: cards,
    image: imageData,
    imagePosition: 'right'
}
