import { Component, OnInit } from '@angular/core';

import { Cardapio } from 'src/app/core/model/cardapio';
import { Imagem } from 'src/app/core/model/imagem';
import { CardapioService } from 'src/app/core/service/cardapio.service';

@Component({
  selector: 'app-lista-cardapio',
  templateUrl: './lista-cardapio.component.html',
  styleUrls: ['./lista-cardapio.component.scss']
})
export class ListaCardapioComponent implements OnInit {

  listaCardapio: Cardapio[] = [];
  cardapioImagens: Imagem[] = [
    { nome: "Arroz", url: "assets/imagens/Arroz.png", descricao: "Imagem de um item de cardápio" }
  ];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.findAllContent().subscribe({
      next: cardapioList => this.listaCardapio = cardapioList.map(c => {
        c.imagem = this.cardapioImagens[0]; return c;
      }),
      error: err => console.log('Não foi possível listar os itens de cardapio', err)
    })
  }

}
