import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})

export class ProjectCarouselComponent {

  // TO DO!: It should use the component in #14 to display the projects.
  @Input() projectItems!: string[] 
  

 }

