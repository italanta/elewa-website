import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMembersSectionComponent } from './team-members-section.component';

describe('TeamMembersSectionComponent', () => {
  let component: TeamMembersSectionComponent;
  let fixture: ComponentFixture<TeamMembersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMembersSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMembersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
