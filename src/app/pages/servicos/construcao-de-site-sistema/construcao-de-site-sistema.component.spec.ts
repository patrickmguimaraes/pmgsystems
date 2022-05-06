import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoDeSiteSistemaComponent } from './construcao-de-site-sistema.component';

describe('ConstrucaoDeSiteSistemaComponent', () => {
  let component: ConstrucaoDeSiteSistemaComponent;
  let fixture: ComponentFixture<ConstrucaoDeSiteSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrucaoDeSiteSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrucaoDeSiteSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
