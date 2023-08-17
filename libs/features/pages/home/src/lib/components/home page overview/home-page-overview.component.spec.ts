import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageOverviewComponent } from './home-page-overview.component';

describe('HomePageOverviewComponent', () => {
  let component: HomePageOverviewComponent;
  let fixture: ComponentFixture<HomePageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
