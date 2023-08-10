import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaSliderButtonComponent } from './elewa-slider-button.component';

describe('ElewaSliderButtonComponent', () => {
  let component: ElewaSliderButtonComponent;
  let fixture: ComponentFixture<ElewaSliderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaSliderButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaSliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
