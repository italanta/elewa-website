import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaNormalButtonComponent } from './elewa-normal-button.component';

describe('ElewaNormalButtonComponent', () => {
  let component: ElewaNormalButtonComponent;
  let fixture: ComponentFixture<ElewaNormalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaNormalButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaNormalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
