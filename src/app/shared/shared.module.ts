import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { BannerComponent } from './banner/banner.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { CrudListComponent } from './cruds/crud-list/crud-list.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { FilterBuscaComponent } from './filter-busca/filter-busca.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { HeaderComponent } from './header/header.component';
import { ModalAdicionarComponent } from './modal-adicionar/modal-adicionar.component';
import { ModalComponent } from './modal/modal.component';
import { SeletorQuantidadeComponent } from './seletor-quantidade/seletor-quantidade.component';



@NgModule({
  declarations: [
    BannerComponent,
    BotaoControleComponent,
    CardComponent,
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
