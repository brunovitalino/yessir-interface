import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PedidoView } from 'src/app/core/model/pedido-view';

@Injectable({
  providedIn: 'root'
})
export class ModalAdicionarService {

  private pedidoViewAtualizadoEvent = new EventEmitter<PedidoView>();
  formGroup: FormGroup;

  private pedidoView: PedidoView;

  setPedidoView(pedidoView: PedidoView): void {
    this.pedidoView = pedidoView;
  }

  obterQuantidadeDePedidoView(): number {
    return this.pedidoView.quantidade;
  }

  getConfirmarNovaQuantidadeEvent(): EventEmitter<PedidoView> {
    return this.pedidoViewAtualizadoEvent;
  }

  atualizarQuantidadeDePedidoView(quantidade: number): void {
    this.pedidoView.quantidade = quantidade;
    this.pedidoView.total = this.pedidoView.preco * quantidade;
    this.pedidoViewAtualizadoEvent.emit(this.pedidoView);
  }
}
