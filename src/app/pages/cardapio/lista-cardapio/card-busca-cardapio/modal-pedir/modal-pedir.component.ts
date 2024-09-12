import { Component } from '@angular/core';
import { CardapioService } from '../../../cardapio.service';
import { CardBuscaCardapioService } from '../card-busca-cardapio.service';
import { Cardapio } from '../../../cardapio';

@Component({
  selector: 'app-modal-pedir',
  templateUrl: './modal-pedir.component.html',
  styleUrls: ['./modal-pedir.component.scss']
})
export class ModalPedirComponent {

  cardapio: Cardapio = {
    id: 0,
    nome: '',
    preco: 0,
    nomeIcone: "local_dining",
    tipo: ''
  };

  constructor(public cardBuscaCardapioService: CardBuscaCardapioService) { }

  adicionar() {
    // this.cardBuscaCardapioService.formCardapio.get("quantidade")?.patchValue(7);
    window.console.log('ITEM FINAL', this.cardBuscaCardapioService.formCardapio.value)
  }

}
