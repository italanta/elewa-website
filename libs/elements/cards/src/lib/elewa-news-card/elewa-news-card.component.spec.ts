import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaNewsCardComponent } from './elewa-news-card.component';

describe('ElewaNewsCardComponent', () => {
  let component: ElewaNewsCardComponent;
  let fixture: ComponentFixture<ElewaNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElewaNewsCardComponent]
    });
    fixture = TestBed.createComponent(ElewaNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
