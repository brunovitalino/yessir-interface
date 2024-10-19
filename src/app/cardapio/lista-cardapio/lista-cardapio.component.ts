import { Component, OnInit } from '@angular/core';

import { Cardapio } from 'src/app/core/model/cardapio';
import { CardapioService } from 'src/app/core/service/cardapio.service';

@Component({
  selector: 'app-lista-cardapio',
  templateUrl: './lista-cardapio.component.html',
  styleUrls: ['./lista-cardapio.component.scss']
})
export class ListaCardapioComponent implements OnInit {

  listaCardapio: Cardapio[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.findAllContent().subscribe({
      next: cardapioList => {
        this.listaCardapio = cardapioList
      },
      error: err => console.log('Não foi possível listar os itens de cardapio', err)
    })
  }

}
