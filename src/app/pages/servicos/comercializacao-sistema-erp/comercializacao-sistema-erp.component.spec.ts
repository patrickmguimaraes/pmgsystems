import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercializacaoSistemaErpComponent } from './comercializacao-sistema-erp.component';

describe('ComercializacaoSistemaErpComponent', () => {
  let component: ComercializacaoSistemaErpComponent;
  let fixture: ComponentFixture<ComercializacaoSistemaErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercializacaoSistemaErpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercializacaoSistemaErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
