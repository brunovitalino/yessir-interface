import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ModalAdicionarService } from '../modal/adicionar/modal-adicionar.service';

@Component({
  selector: 'app-seletor-quantidade',
  templateUrl: './seletor-quantidade.component.html',
  styleUrls: ['./seletor-quantidade.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeletorQuantidadeComponent {
  
  @Input() quantidade: number;
  @Output() quantidadeAtualizada = new EventEmitter<number>();

  constructor(public modalAdicionarService: ModalAdicionarService) { }
  
  incrementar(): void {
    this.quantidade += 1;
    this.quantidadeAtualizada.emit(this.quantidade);
  }

  decrementar(): void {
    if (this.quantidade <= 0) return;
    this.quantidade -= 1;
    this.quantidadeAtualizada.emit(this.quantidade);
  }

}
