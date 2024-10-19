import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { FilterCardapioComponent } from './filter-cardapio/filter-cardapio.component';
import { ListaCardapioComponent } from './lista-cardapio/lista-cardapio.component';
import { CardBuscaCardapioComponent } from './lista-cardapio/card-busca-cardapio/card-busca-cardapio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ModalPedirComponent } from './lista-cardapio/card-busca-cardapio/modal-pedir/modal-pedir.component';



@NgModule({
  declarations: [
    CardapioComponent,
    FilterCardapioComponent,
    ListaCardapioComponent,
    CardBuscaCardapioComponent,
    ModalPedirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    CardapioComponent,
    FilterCardapioComponent,
    ListaCardapioComponent,
    CardBuscaCardapioComponent,
    ModalPedirComponent
  ]
})
export class CardapioModule { }
