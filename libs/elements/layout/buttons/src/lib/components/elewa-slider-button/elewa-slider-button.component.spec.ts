import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderButtonComponent } from './elewa-slider-button.component';

describe('ElewaSliderButtonComponent', () => {
  let component: SliderButtonComponent;
  let fixture: ComponentFixture<SliderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
