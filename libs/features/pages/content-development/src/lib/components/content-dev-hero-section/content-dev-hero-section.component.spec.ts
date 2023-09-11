import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentDevHeroSectionComponent } from './content-dev-hero-section.component';

describe('ContentDevHeroSectionComponent', () => {
  let component: ContentDevHeroSectionComponent;
  let fixture: ComponentFixture<ContentDevHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDevHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentDevHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
