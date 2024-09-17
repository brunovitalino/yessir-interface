import { Component, EventEmitter, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Pedido } from '../../model/pedido';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalPedirComponent } from 'src/app/pages/cardapio/lista-cardapio/card-busca-cardapio/modal-pedir/modal-pedir.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdicionarComponent } from '../../modal-adicionar/modal-adicionar.component';
import { ModalAdicionarService } from '../../modal/adicionar/modal-adicionar.service';

const PEDIDOS_DATA: Pedido[] = [
  {id: 1, nome: 'Pizza', preco: 40,  nomeIcone: 'dinner',  tipo: 'COMIDA',  quantidade: 1 },
  {id: 2, nome: 'Coxinha', preco: 7,  nomeIcone: 'dinner',  tipo: 'COMIDA',  quantidade: 3 },
  {id: 3, nome: 'Arroz', preco: 8,  nomeIcone: 'dinner',  tipo: 'COMIDA',  quantidade: 1 },
  {id: 4, nome: 'Batata frita', preco: 15,  nomeIcone: 'dinner',  tipo: 'COMIDA',  quantidade: 2 },
  {id: 5, nome: 'Cerveja', preco: 13,  nomeIcone: 'dinner',  tipo: 'BEBIDA',  quantidade: 5 },
];

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnDestroy {
  @Input() showIconEdit = true;
  @Input() showIconRemove = true;
  @Input() elementsList: any = [];
  @Input() elementsDisplayedColumns: string[] = [];

  private confirmEvent: EventEmitter<boolean>;

  constructor(
    public dialog: MatDialog,
    public modalAdicionarService: ModalAdicionarService
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'preco', 'quantidade', 'total', 'remove'];
  dataSource = [...PEDIDOS_DATA];

  @ViewChild(MatTable) table: MatTable<Pedido>;

  remove(element: any) {
    var index = this.dataSource.indexOf(element);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  openEditDialog(element) {
    this.modalAdicionarService.formGroup.patchValue(element);
    this.dialog.open(ModalAdicionarComponent, {
      width: '50%',
      disableClose: true
    });
    this.confirmEvent = this.modalAdicionarService.getConfirmarEvent();
    this.confirmEvent.subscribe(() => {
      let element = this.modalAdicionarService.formGroup.value;
      this.dataSource = this.dataSource.map(e => e.id != element.id ? e : element);
    });
  }

  ngOnDestroy(): void {
    if (this.confirmEvent) {
      this.confirmEvent.unsubscribe();
    }
  }

}
