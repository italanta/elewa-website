import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaContentDevAboutOneComponent } from './elewa-content-dev-about-one.component';

describe('ElewaContentDevAboutOneComponent', () => {
  let component: ElewaContentDevAboutOneComponent;
  let fixture: ComponentFixture<ElewaContentDevAboutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaContentDevAboutOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaContentDevAboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
