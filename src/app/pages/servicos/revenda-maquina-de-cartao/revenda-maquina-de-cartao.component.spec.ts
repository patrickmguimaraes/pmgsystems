import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendaMaquinaDeCartaoComponent } from './revenda-maquina-de-cartao.component';

describe('RevendaMaquinaDeCartaoComponent', () => {
  let component: RevendaMaquinaDeCartaoComponent;
  let fixture: ComponentFixture<RevendaMaquinaDeCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevendaMaquinaDeCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendaMaquinaDeCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
