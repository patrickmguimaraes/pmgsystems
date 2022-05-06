import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercializacaoSistemaPdvComponent } from './comercializacao-sistema-pdv.component';

describe('ComercializacaoSistemaPdvComponent', () => {
  let component: ComercializacaoSistemaPdvComponent;
  let fixture: ComponentFixture<ComercializacaoSistemaPdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercializacaoSistemaPdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercializacaoSistemaPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
