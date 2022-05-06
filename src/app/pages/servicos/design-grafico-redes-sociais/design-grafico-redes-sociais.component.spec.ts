import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGraficoRedesSociaisComponent } from './design-grafico-redes-sociais.component';

describe('DesignGraficoRedesSociaisComponent', () => {
  let component: DesignGraficoRedesSociaisComponent;
  let fixture: ComponentFixture<DesignGraficoRedesSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignGraficoRedesSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignGraficoRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
