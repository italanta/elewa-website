import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaConsultancyAboutTwoComponent } from './elewa-consultancy-about-two.component';

describe('ElewaConsultancyAboutTwoComponent', () => {
  let component: ElewaConsultancyAboutTwoComponent;
  let fixture: ComponentFixture<ElewaConsultancyAboutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaConsultancyAboutTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaConsultancyAboutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
