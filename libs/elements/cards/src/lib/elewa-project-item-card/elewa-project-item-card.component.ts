import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/cards';
import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent implements OnInit {
  @Input( ) project!: ProjectItem

  ngOnInit () {
    this.project = __highlightedProjects[0]
  }
}
