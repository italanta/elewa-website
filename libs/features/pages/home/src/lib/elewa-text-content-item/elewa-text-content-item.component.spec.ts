import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaTextContentItemComponent } from './elewa-text-content-item.component';

describe('ElewaTextContentItemComponent', () => {
  let component: ElewaTextContentItemComponent;
  let fixture: ComponentFixture<ElewaTextContentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElewaTextContentItemComponent]
    });
    fixture = TestBed.createComponent(ElewaTextContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
