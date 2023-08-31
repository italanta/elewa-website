import { Component, OnInit } from '@angular/core';
import { __highlightedSDGList } from '@elewa-website/models/data/sections';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  sdgListData: InfoCard[] = []; // Initialize as an empty array

  ngOnInit(): void {
    // Load or assign data to sdgListData
    this.sdgListData = __highlightedSDGList; // Populate the array with data
  }
}
