import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookletsAboutSectionOneComponent } from './booklets-about-section.component';

describe('BookletsPageTextImageBannerSectionComponent', () => {
  let component: BookletsAboutSectionOneComponent;
  let fixture: ComponentFixture<BookletsAboutSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookletsAboutSectionOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      BookletsAboutSectionOneComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
