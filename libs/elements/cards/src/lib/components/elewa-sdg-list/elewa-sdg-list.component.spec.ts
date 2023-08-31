import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaSdgListComponent } from './elewa-sdg-list.component';

describe('ElewaSdgListComponent', () => {
  let component: ElewaSdgListComponent;
  let fixture: ComponentFixture<ElewaSdgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElewaSdgListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaSdgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
