import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeOverviewSectionComponent } from './home-overview-section.component';

describe('HomeOverviewSectionComponent', () => {
  let component: HomeOverviewSectionComponent;
  let fixture: ComponentFixture<HomeOverviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOverviewSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOverviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
