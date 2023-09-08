import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaWebsiteLearningServicesComponent } from './elewa-website-learning-services.component';

describe('ElewaWebsiteLearningServicesComponent', () => {
  let component: ElewaWebsiteLearningServicesComponent;
  let fixture: ComponentFixture<ElewaWebsiteLearningServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaWebsiteLearningServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaWebsiteLearningServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
