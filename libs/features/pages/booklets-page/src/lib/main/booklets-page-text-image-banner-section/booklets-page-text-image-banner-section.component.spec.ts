import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookletsPageTextImageBannerSectionComponent } from './booklets-page-text-image-banner-section.component';

describe('BookletsPageTextImageBannerSectionComponent', () => {
  let component: BookletsPageTextImageBannerSectionComponent;
  let fixture: ComponentFixture<BookletsPageTextImageBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookletsPageTextImageBannerSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      BookletsPageTextImageBannerSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
