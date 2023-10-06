import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemDisciplinaComponent } from './mantem-disciplina.component';

describe('MantemDisciplinaComponent', () => {
  let component: MantemDisciplinaComponent;
  let fixture: ComponentFixture<MantemDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemDisciplinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
