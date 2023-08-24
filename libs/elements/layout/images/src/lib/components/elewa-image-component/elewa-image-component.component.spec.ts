import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaImageComponentComponent } from './elewa-image-component.component';

describe('ElewaImageComponentComponent', () => {
  let component: ElewaImageComponentComponent;
  let fixture: ComponentFixture<ElewaImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaImageComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
