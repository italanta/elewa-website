import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedSDGList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-sdg-list',
  templateUrl: './elewa-sdg-list.component.html',
  styleUrls: ['./elewa-sdg-list.component.scss'],
})
export class ElewaSdgListComponent implements OnInit {
  @Input() sdgList!: InfoCard[];

  ngOnInit(): void {
    this.sdgList = __highlightedSDGList;
  }
}
