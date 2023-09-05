import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultancyHeroSectionComponent } from './consultancy-hero-section.component';

describe('ConsultancyHeroSectionComponent', () => {
  let component: ConsultancyHeroSectionComponent;
  let fixture: ComponentFixture<ConsultancyHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultancyHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultancyHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
