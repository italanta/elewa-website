import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookletsHeroSectionComponent } from './booklets-hero-section.component';

describe('BookletsHeroSectionComponent', () => {
  let component: BookletsHeroSectionComponent;
  let fixture: ComponentFixture<BookletsHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookletsHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookletsHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
