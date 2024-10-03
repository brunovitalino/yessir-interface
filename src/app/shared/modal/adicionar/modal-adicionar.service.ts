import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModalAdicionarService {

  private confirmarEvent = new EventEmitter<boolean>();
  formGroup: FormGroup;

  constructor() {
    this.initFormGroup();
    // var pedidoFormControlers = Object.keys(this.pedido).map(key => [key, new FormControl(this.pedido[key])]);
    // this.formGroup = new FormGroup(Object.fromEntries(pedidoFormControlers));
  }

  initFormGroup(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('prato padrão'),
      preco: new FormControl(0),
      quantidade: new FormControl(0),
      total: new FormControl(0)
    });
  }

  obterFormControl(formControlName: string): FormControl {
    const control = this.formGroup.get(formControlName);
    if (!control) {
      throw new Error(`FormControl com nome "${formControlName}" não existe.`);
    }
    return control as FormControl;
  }

  confirmar(): void {
    this.confirmarEvent.emit(true);
  }

  getConfirmarEvent(): EventEmitter<boolean> {
    return this.confirmarEvent;
  }
}
