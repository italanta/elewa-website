import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentDevelopmentPageComponent } from './content-development-page.component';

describe('ContentDevelopmentPageComponent', () => {
  let component: ContentDevelopmentPageComponent;
  let fixture: ComponentFixture<ContentDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDevelopmentPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
