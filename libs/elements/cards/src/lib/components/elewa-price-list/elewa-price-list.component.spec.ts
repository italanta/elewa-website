import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaPriceListComponent } from './elewa-price-list.component';

describe('ElewaPriceListComponent', () => {
  let component: ElewaPriceListComponent;
  let fixture: ComponentFixture<ElewaPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaPriceListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
