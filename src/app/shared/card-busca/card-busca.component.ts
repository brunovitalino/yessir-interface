import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPedirComponent } from 'src/app/cardapio/lista-cardapio/card-busca-cardapio/modal-pedir/modal-pedir.component';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalPedirComponent, {
      width: '50%',
      disableClose: true
    });
  }

}
