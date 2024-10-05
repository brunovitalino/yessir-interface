import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cardapio } from '../../../../shared/model/cardapio';
import { CardBuscaCardapioService } from './card-busca-cardapio.service';
import { ModalPedirComponent } from './modal-pedir/modal-pedir.component';

@Component({
  selector: 'app-card-busca-cardapio',
  templateUrl: './card-busca-cardapio.component.html',
  styleUrls: ['./card-busca-cardapio.component.scss']
})
export class CardBuscaCardapioComponent {

  @Input() cardapio : Cardapio = {
    id: 999,
    nome: "Macarrão",
    preco: 24,
    cardapioIcone: { nome: "local_dining" },
    cardapioTipo: { nome: "COMIDA" }
  }

  constructor(
    public dialog: MatDialog,
    public cardBuscaCardapioService: CardBuscaCardapioService
  ) { }

  openDialog() {
    this.cardBuscaCardapioService.formCardapio.patchValue(this.cardapio);
    window.console.log('ITEM ATUAL', this.cardapio);

    this.dialog.open(ModalPedirComponent, {
      width: '50%',
      disableClose: true
    });
  }

}
