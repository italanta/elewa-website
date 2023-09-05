import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaConsultancyAboutOneComponent } from './elewa-consultancy-about-one.component';

describe('ElewaConsultancyAboutOneComponent', () => {
  let component: ElewaConsultancyAboutOneComponent;
  let fixture: ComponentFixture<ElewaConsultancyAboutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaConsultancyAboutOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaConsultancyAboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
