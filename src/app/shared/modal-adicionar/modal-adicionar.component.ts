import { Component } from '@angular/core';

import { ModalAdicionarService } from '../modal/adicionar/modal-adicionar.service';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.scss']
})
export class ModalAdicionarComponent {
  quantidade: number = 0;

  constructor(public modalAdicionarService: ModalAdicionarService) { }

  obterQuantidadeDePedidoView(): number {
    return this.modalAdicionarService.obterQuantidadeDePedidoView();
  }

  atualizarQuantidade(quantidade: number) {
    this.quantidade = quantidade;
  }

  confirmar(): void {
    this.modalAdicionarService.atualizarQuantidadeDePedidoView(this.quantidade);
  }

}
