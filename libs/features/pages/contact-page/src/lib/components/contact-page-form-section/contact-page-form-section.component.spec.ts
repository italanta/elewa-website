import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPageFormSectionComponent } from './contact-page-form-section.component';

describe('ContactPageFormSectionComponent', () => {
  let component: ContactPageFormSectionComponent;
  let fixture: ComponentFixture<ContactPageFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPageFormSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
