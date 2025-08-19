import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPresentacion1Component } from './slider-presentacion-1.component';

describe('SliderPresentacion1Component', () => {
  let component: SliderPresentacion1Component;
  let fixture: ComponentFixture<SliderPresentacion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderPresentacion1Component]
    });
    fixture = TestBed.createComponent(SliderPresentacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
