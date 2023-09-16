import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultancyAboutOneComponent } from './consultancy-about-one.component';

describe('ElewaConsultancyAboutOneComponent', () => {
  let component: ConsultancyAboutOneComponent;
  let fixture: ComponentFixture<ConsultancyAboutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultancyAboutOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultancyAboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
