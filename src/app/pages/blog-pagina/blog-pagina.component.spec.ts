import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPaginaComponent } from './blog-pagina.component';

describe('BlogPaginaComponent', () => {
  let component: BlogPaginaComponent;
  let fixture: ComponentFixture<BlogPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
