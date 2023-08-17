import { Component, Input } from '@angular/core';
import { Overview } from "libs/models/schema/ui/overview-section/overview"

@Component({
  selector: 'elewa-website-home-page-overview',
  templateUrl: './home-page-overview.component.html',
  styleUrls: ['./home-page-overview.component.scss'],
})
export class HomePageOverviewComponent {

  constructor() {
    this.data = {

      content: ["", "", ""],
      header: "",
      imgUrl: "",
      bgColor: "",
      headerColor: "",
      contentColor: ""
      
    }
  }

  @Input() data: Overview

}
