import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaWebsiteLearningServicesComponent } from './elewa-website-learning-services.component';

describe('ElewaWebsiteLearningServicesComponent', () => {
  let component: ElewaWebsiteLearningServicesComponent;
  let fixture: ComponentFixture<ElewaWebsiteLearningServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElewaWebsiteLearningServicesComponent]
    });
    fixture = TestBed.createComponent(ElewaWebsiteLearningServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
