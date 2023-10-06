import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDisciplinasComponent } from './listagem-disciplinas.component';

describe('ListagemDisciplinasComponent', () => {
  let component: ListagemDisciplinasComponent;
  let fixture: ComponentFixture<ListagemDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemDisciplinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
