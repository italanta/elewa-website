import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutHeroSectionComponent } from './about-hero-section.component';

describe('AboutHeroSectionComponent', () => {
  let component: AboutHeroSectionComponent;
  let fixture: ComponentFixture<AboutHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
