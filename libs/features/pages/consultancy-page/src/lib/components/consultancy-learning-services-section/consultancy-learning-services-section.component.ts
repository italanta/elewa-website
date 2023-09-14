import { Component, } from '@angular/core';
import { __learningDevicesData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-consultancy-learning-services',
  templateUrl: './consultancy-learning-services-section.component.html',
  styleUrls: ['./consultancy-learning-services-section.component.scss'],
})
export class ConsultancyLearningServicesComponent {
  learningDevicesData = __learningDevicesData
}
