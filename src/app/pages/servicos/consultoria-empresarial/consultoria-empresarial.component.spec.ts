import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriaEmpresarialComponent } from './consultoria-empresarial.component';

describe('ConsultoriaEmpresarialComponent', () => {
  let component: ConsultoriaEmpresarialComponent;
  let fixture: ComponentFixture<ConsultoriaEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriaEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriaEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
