import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnersSectionComponent } from './partners-section.component';

describe('PartnersSectionComponent', () => {
  let component: PartnersSectionComponent;
  let fixture: ComponentFixture<PartnersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
