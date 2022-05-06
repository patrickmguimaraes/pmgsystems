import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriaEstrategicaComponent } from './consultoria-estrategica.component';

describe('ConsultoriaEstrategicaComponent', () => {
  let component: ConsultoriaEstrategicaComponent;
  let fixture: ComponentFixture<ConsultoriaEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriaEstrategicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriaEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
