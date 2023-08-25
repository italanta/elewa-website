import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/sections/projects';
import { __highlightedProjects as highlights } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss'],
})
export class CarouselListComponent implements OnInit{
  @Input() projects :ProjectItem[] = highlights

  ngOnInit() {
    this.projects;
  }
}
