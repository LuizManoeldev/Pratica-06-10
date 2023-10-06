import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemDisciplinasComponent } from './listagem-disciplinas/listagem-disciplinas.component';
import { MantemDisciplinaComponent } from './mantem-disciplina/mantem-disciplina.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {PipesModule} from '../pipes/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ListagemDisciplinasComponent,
    MantemDisciplinaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterModule
  ],
  exports: [
    ListagemDisciplinasComponent,
    MantemDisciplinaComponent,
  ]
})
export class DisciplinaModule { }
