import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaContentDevAboutTwoComponent } from './elewa-content-dev-about-two.component';

describe('ElewaContentDevAboutTwoComponent', () => {
  let component: ElewaContentDevAboutTwoComponent;
  let fixture: ComponentFixture<ElewaContentDevAboutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaContentDevAboutTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaContentDevAboutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
