import { Component, } from '@angular/core';
import { __learningDevicesData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-learning-services',
  templateUrl: './elewa-website-learning-services.component.html',
  styleUrls: ['./elewa-website-learning-services.component.scss'],
})
export class ElewaWebsiteLearningServicesComponent {
  learningDevicesData = __learningDevicesData
}
