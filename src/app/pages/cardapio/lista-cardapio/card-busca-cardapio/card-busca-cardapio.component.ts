import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cardapio } from '../../cardapio';
import { CardapioService } from '../../cardapio.service';
import { ModalPedirComponent } from './modal-pedir/modal-pedir.component';

@Component({
  selector: 'app-card-busca-cardapio',
  templateUrl: './card-busca-cardapio.component.html',
  styleUrls: ['./card-busca-cardapio.component.scss']
})
export class CardBuscaCardapioComponent {

  @Input() cardapio : Cardapio = {
    id: 1,
    nome: "Macarrão",
    preco: 24,
    nomeIcone: "local_dining",
    tipo: "COMIDA",
  }

  constructor(public dialog: MatDialog, private service: CardapioService) {}

  openDialog() {
    this.dialog.open(ModalPedirComponent, {
      width: '50%',
      disableClose: true
    });
  }

}
