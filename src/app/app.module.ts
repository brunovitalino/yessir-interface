import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { MaterialModule } from './core/material/material.module';
import { SharedModule } from './shared/shared.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { PedidoModule } from './pedido/pedido.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    AutenticacaoModule,
    AtendimentoModule,
    CardapioModule,
    PedidoModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
