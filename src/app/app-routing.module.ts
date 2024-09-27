import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoListComponent } from './pages/pedido/pedido-list/pedido-list.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
  },
  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'pedido',
    component: PedidoListComponent
  },
  {
    path: 'atendimento',
    component: AtendimentoComponent
  },
  {
    path: 'atendimento/:mesaId',
    component: AtendimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
