import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaImageAndDetailsBannerComponent } from './elewa-image-and-details-banner.component';

describe('ElewaImageAndDetailsBannerComponent', () => {
  let component: ElewaImageAndDetailsBannerComponent;
  let fixture: ComponentFixture<ElewaImageAndDetailsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaImageAndDetailsBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaImageAndDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
