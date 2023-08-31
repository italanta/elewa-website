import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdgSectionComponent } from './sdg-section.component';

describe('SdgSectionComponent', () => {
  let component: SdgSectionComponent;
  let fixture: ComponentFixture<SdgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdgSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
