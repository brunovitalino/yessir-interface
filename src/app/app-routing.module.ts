import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaCardapioComponent } from './pages/cardapio/lista-cardapio/lista-cardapio.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
