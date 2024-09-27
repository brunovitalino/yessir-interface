import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { FilterBuscaComponent } from './shared/filter-busca/filter-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { ListaCardapioComponent } from './pages/cardapio/lista-cardapio/lista-cardapio.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FilterCardapioComponent } from './pages/cardapio/filter-cardapio/filter-cardapio.component';
import { ModalPedirComponent } from './pages/cardapio/lista-cardapio/card-busca-cardapio/modal-pedir/modal-pedir.component';
import { HttpClientModule } from '@angular/common/http';
import { CardBuscaCardapioComponent } from './pages/cardapio/lista-cardapio/card-busca-cardapio/card-busca-cardapio.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeletorQuantidadeComponent } from './shared/seletor-quantidade/seletor-quantidade.component';
import { CrudListComponent } from './shared/cruds/crud-list/crud-list.component';
import { PedidoListComponent } from './pages/pedido/pedido-list/pedido-list.component';
import { MatTableModule } from '@angular/material/table';
import { ModalAdicionarComponent } from './shared/modal-adicionar/modal-adicionar.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CardBuscaComponent,
    FilterBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    ListaCardapioComponent,
    FilterCardapioComponent,
    ModalPedirComponent,
    CardBuscaCardapioComponent,
    CardapioComponent,
    SeletorQuantidadeComponent,
    CrudListComponent,
    PedidoListComponent,
    ModalAdicionarComponent,
    AtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
