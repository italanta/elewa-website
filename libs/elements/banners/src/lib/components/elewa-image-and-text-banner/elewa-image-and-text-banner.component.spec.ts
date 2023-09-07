import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaImageAndTextBannerComponent } from './elewa-image-and-text-banner.component';

describe('ElewaImageAndTextBannerComponent', () => {
  let component: ElewaImageAndTextBannerComponent;
  let fixture: ComponentFixture<ElewaImageAndTextBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaImageAndTextBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaImageAndTextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
