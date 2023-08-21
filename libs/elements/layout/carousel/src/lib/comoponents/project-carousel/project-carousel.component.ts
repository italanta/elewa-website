import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})

export class ProjectCarouselComponent {
  

  public imgCollection: string[] = [
   'https://www.theindiaforum.in/sites/default/files/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg',  
   'https://static.toiimg.com/photo/msid-92790134/92790134.jpg',
   'https://images.hindustantimes.com/img/2022/08/01/1600x900/0f1fdeae-1162-11ed-865b-9917e61c1d8b_1659335153333.jpg',
   'https://kids.earth.org/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-17-900x675.jpg',
   'https://cdn.downtoearth.org.in/library/large/2018-06-01/0.69336200_1527834121_kenya.jpg', 
   'https://media.smallbiztrends.com/2023/05/how-to-make-money-farming.png',
   'https://img.freepik.com/free-photo/farmers-are-working-cabbage-farm_1150-7117.jpg?w=2000',
   'https://ej2.syncfusion.com/products/images/carousel/cardinal.png',
   'https://ej2.syncfusion.com/products/images/carousel/hunei.png',
   'https://ej2.syncfusion.com/products/images/carousel/costa-rica.png'
  ]
}
