import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookletsPageComponent } from './booklets-page.component';

describe('BookletsPageComponent', () => {
  let component: BookletsPageComponent;
  let fixture: ComponentFixture<BookletsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookletsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookletsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
