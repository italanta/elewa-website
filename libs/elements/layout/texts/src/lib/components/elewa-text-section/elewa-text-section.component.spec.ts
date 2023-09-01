import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaTextSectionComponent } from './elewa-text-section.component';

describe('ElewaTextSectionComponent', () => {
  let component: ElewaTextSectionComponent;
  let fixture: ComponentFixture<ElewaTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaTextSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
