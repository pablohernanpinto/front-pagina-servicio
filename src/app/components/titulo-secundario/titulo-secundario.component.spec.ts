import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSecundarioComponent } from './titulo-secundario.component';

describe('TituloSecundarioComponent', () => {
  let component: TituloSecundarioComponent;
  let fixture: ComponentFixture<TituloSecundarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloSecundarioComponent]
    });
    fixture = TestBed.createComponent(TituloSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
