import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CardapioIcone } from 'src/app/core/model/cardapio-icone';
import { CardapioTipo } from 'src/app/core/model/cardapio-tipo';

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
      cardapioIcone: new FormControl({ nome: "local_dining" } as CardapioIcone),
      cardapioTipo: new FormControl({ nome: "COMIDA" } as CardapioTipo),
      quantidade: new FormControl(1)
    });
  }

  obterControle(formControlName:string): FormControl {
    const control = this.formCardapio.get(formControlName);
    if (!control) {
      throw new Error(`FormControl com nome "${formControlName}" não existe.`);
    }
    return control as FormControl;
  }
}
