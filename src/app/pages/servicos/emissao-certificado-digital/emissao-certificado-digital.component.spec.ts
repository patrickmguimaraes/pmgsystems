import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoCertificadoDigitalComponent } from './emissao-certificado-digital.component';

describe('EmissaoCertificadoDigitalComponent', () => {
  let component: EmissaoCertificadoDigitalComponent;
  let fixture: ComponentFixture<EmissaoCertificadoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoCertificadoDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissaoCertificadoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
