import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvHeroSectionComponent } from './conv-hero-section.component';

describe('ConvHeroSectionComponent', () => {
  let component: ConvHeroSectionComponent;
  let fixture: ComponentFixture<ConvHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
