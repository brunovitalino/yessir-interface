import { Component } from '@angular/core';

import { ModalAdicionarService } from '../modal/adicionar/modal-adicionar.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.scss']
})
export class ModalAdicionarComponent {

  constructor(public modalAdicionarService: ModalAdicionarService) { }

  obterFormControl(formControlName: string): FormControl {
    return this.modalAdicionarService.obterFormControl(formControlName);
  }

  confirmar(): void {
    // this.cardBuscaCardapioService.formCardapio.get("quantidade")?.patchValue(7);
    // window.console.log('ITEM FINAL', this.modalAdicionarService.formGroup.value)
    this.modalAdicionarService.confirmar();
  }

}
