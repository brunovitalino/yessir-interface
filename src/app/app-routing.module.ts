import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoListComponent } from './pages/pedido/pedido-list/pedido-list.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { mesaAuthGuard } from './core/guards/mesa-auth.guard';
import { garcomAuthGuard } from './core/guards/garcom-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
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
    component: PedidoListComponent,
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
