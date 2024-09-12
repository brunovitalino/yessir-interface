import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CardBuscaCardapioService {

  formCardapio: FormGroup;

  constructor() {
    this.formCardapio = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('prato padrão'),
      preco: new FormControl(0),
      nomeIcone: new FormControl('local_dining'),
      tipo: new FormControl('COMIDA'),
      quantidade: new FormControl(0)
    });
  }
}
