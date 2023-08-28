import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaProjectItemCardComponent } from './elewa-project-item-card.component';

describe('ElewaProjectItemCardComponent', () => {
  let component: ElewaProjectItemCardComponent;
  let fixture: ComponentFixture<ElewaProjectItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaProjectItemCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaProjectItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
