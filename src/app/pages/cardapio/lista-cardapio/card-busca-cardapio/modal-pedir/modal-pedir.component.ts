import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-pedir',
  templateUrl: './modal-pedir.component.html',
  styleUrls: ['./modal-pedir.component.scss']
})
export class ModalPedirComponent {

  adicionar() {
    window.console.log('adicionando itens')
  }

}
