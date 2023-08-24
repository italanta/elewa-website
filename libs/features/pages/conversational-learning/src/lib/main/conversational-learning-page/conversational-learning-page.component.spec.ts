import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversationalLearningPageComponent } from './conversational-learning-page.component';

describe('ConversationalLearningPageComponent', () => {
  let component: ConversationalLearningPageComponent;
  let fixture: ComponentFixture<ConversationalLearningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversationalLearningPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversationalLearningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
