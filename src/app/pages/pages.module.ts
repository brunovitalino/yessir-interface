import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FilterCardapioComponent } from './cardapio/filter-cardapio/filter-cardapio.component';
import { CardBuscaCardapioComponent } from './cardapio/lista-cardapio/card-busca-cardapio/card-busca-cardapio.component';
import { ModalPedirComponent } from './cardapio/lista-cardapio/card-busca-cardapio/modal-pedir/modal-pedir.component';
import { ListaCardapioComponent } from './cardapio/lista-cardapio/lista-cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';



@NgModule({
  declarations: [
    CardapioComponent,
    FilterCardapioComponent,
    ListaCardapioComponent,
    CardBuscaCardapioComponent,
    ModalPedirComponent,
    PedidoComponent,
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
    CardapioComponent,
    FilterCardapioComponent,
    ListaCardapioComponent,
    CardBuscaCardapioComponent,
    ModalPedirComponent,
    PedidoComponent,
    AtendimentoComponent
  ]
})
export class PagesModule { }
