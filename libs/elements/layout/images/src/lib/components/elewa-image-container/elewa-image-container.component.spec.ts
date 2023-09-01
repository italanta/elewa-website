import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaImageContainerComponent } from './elewa-image-container.component';

describe('ElewaImageContainerComponent', () => {
  let component: ElewaImageContainerComponent;
  let fixture: ComponentFixture<ElewaImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaImageContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
