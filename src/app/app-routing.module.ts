import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoListComponent } from './pages/pedido/pedido-list/pedido-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full'
  },
  {
    path: 'pedidos',
    component: HomeComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'pedido',
    component: PedidoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
