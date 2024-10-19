import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtendimentoComponent } from './atendimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AtendimentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    AtendimentoComponent
  ]
})
export class AtendimentoModule { }
