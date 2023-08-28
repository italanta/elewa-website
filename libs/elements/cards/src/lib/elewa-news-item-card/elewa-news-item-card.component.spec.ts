import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaNewsItemCardComponent } from './elewa-news-item-card.component';

describe('ElewaNewsItemCardComponent', () => {
  let component: ElewaNewsItemCardComponent;
  let fixture: ComponentFixture<ElewaNewsItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElewaNewsItemCardComponent]
    });
    fixture = TestBed.createComponent(ElewaNewsItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
