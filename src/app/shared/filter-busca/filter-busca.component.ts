import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-filter-busca',
  templateUrl: './filter-busca.component.html',
  styleUrls: ['./filter-busca.component.scss']
})
export class FilterBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

}
