import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrudListComponent } from './cruds/crud-list/crud-list.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardComponent } from './card/card.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { FilterBuscaComponent } from './filter-busca/filter-busca.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAdicionarComponent } from './modal-adicionar/modal-adicionar.component';
import { SeletorQuantidadeComponent } from './seletor-quantidade/seletor-quantidade.component';
import { CardBuscaCardapioComponent } from '../pages/cardapio/lista-cardapio/card-busca-cardapio/card-busca-cardapio.component';



@NgModule({
  declarations: [
    BannerComponent,
    BotaoControleComponent,
    CardComponent,
    CardBuscaComponent,
    ContainerComponent,
    CrudListComponent,
    DropdownUfComponent,
    FilterBuscaComponent,
    FooterComponent,
    FormBaseComponent,
    HeaderComponent,
    ModalComponent,
    ModalAdicionarComponent,
    SeletorQuantidadeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    BotaoControleComponent,
    CardComponent,
    CardBuscaComponent,
    ContainerComponent,
    CrudListComponent,
    DropdownUfComponent,
    FilterBuscaComponent,
    FooterComponent,
    FormBaseComponent,
    HeaderComponent,
    ModalComponent,
    ModalAdicionarComponent,
    SeletorQuantidadeComponent
  ]
})
export class SharedModule { }
