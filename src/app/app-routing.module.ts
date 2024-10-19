import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mesaAuthGuard } from './core/guards/mesa-auth.guard';
import { garcomAuthGuard } from './core/guards/garcom-auth.guard';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
  },
  {
    path: '',
    redirectTo: 'cardapio',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    component: CardapioComponent,
    canActivate: [mesaAuthGuard]
  },
  {
    path: 'pedido',
    component: PedidoComponent,
    canActivate: [mesaAuthGuard]
  },
  {
    path: 'atendimento',
    component: AtendimentoComponent,
    canActivate: [garcomAuthGuard]
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
