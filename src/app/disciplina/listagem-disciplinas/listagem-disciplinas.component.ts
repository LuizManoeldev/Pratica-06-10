import { Component } from '@angular/core';
import {DISCIPLINAS } from 'src/app/shared/modelo/DISCIPLINAS';
import {Disciplina} from '../../shared/modelo/Disciplina';


@Component({
  selector: 'app-listagem-disciplinas',
  templateUrl: './listagem-disciplinas.component.html',
  styleUrls: ['./listagem-disciplinas.component.css']
})
export class ListagemDisciplinasComponent {
  
  disciplinas = DISCIPLINAS;
  excluir(disciplinaARemover: Disciplina): void {
    const indx = this.disciplinas.findIndex(disciplina =>
      disciplina.id === disciplinaARemover.id);

    this.disciplinas.splice(indx, 1);
  }
}
