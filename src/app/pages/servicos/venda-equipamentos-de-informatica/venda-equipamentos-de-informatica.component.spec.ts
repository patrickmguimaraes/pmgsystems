import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaEquipamentosDeInformaticaComponent } from './venda-equipamentos-de-informatica.component';

describe('VendaEquipamentosDeInformaticaComponent', () => {
  let component: VendaEquipamentosDeInformaticaComponent;
  let fixture: ComponentFixture<VendaEquipamentosDeInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaEquipamentosDeInformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaEquipamentosDeInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
