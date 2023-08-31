import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaInfoCardComponent } from './elewa-info-card.component';

describe('ElewaInfoCardComponent', () => {
  let component: ElewaInfoCardComponent;
  let fixture: ComponentFixture<ElewaInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
