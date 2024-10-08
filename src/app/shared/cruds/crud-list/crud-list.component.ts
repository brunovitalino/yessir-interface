import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { ModalAdicionarComponent } from '../../modal-adicionar/modal-adicionar.component';
import { ModalAdicionarService } from '../../modal/adicionar/modal-adicionar.service';
import { Pedido } from 'src/app/core/model/pedido';
import { PedidoView } from 'src/app/core/model/pedido-view';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild(MatTable) table: MatTable<Pedido>;
  @Input() displayedColumnsInput: string[] = [];
  @Input() customPedidoList: any[] = [];
  @Input() showEditRemoveIcons = true;
  @Input() isContaEncerrada = false;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<any>();
  @Output() encerrarContaEvent = new EventEmitter();

  private pedidoViewAtualizadoEvent: EventEmitter<PedidoView>;
  displayedColumns: string[] = [];
  dataSource: any[] = [];

  
  constructor(
    public dialog: MatDialog,
    public modalAdicionarService: ModalAdicionarService
  ) {
  }
  
  ngOnInit(): void {
    this.loadDisplayedColumns();
  }

  loadDisplayedColumns(): void {
    this.displayedColumns = !this.isShowEditRemoveIcons() ? [...this.displayedColumnsInput] : [...this.displayedColumnsInput, 'editRemoveIcons'];
  }

  isIdColumn(columnTitle: string): boolean {
    return columnTitle == 'id'
  }

  isDecimalColumn(columnTitle: string): boolean {
    return columnTitle == 'preco' || columnTitle == 'total'
  }

  isShowEditRemoveIcons(): boolean {
    return this.showEditRemoveIcons;
  }

  openEditDialog(element): void {
    console.log("modal edit", element);
    //this.modalAdicionarService.formGroup.patchValue(element);
    this.modalAdicionarService.setPedidoView(element);
    this.dialog.open(ModalAdicionarComponent, {
      width: '50%',
      disableClose: true
    });
    this.pedidoViewAtualizadoEvent = this.modalAdicionarService.getConfirmarNovaQuantidadeEvent();
    this.pedidoViewAtualizadoEvent.subscribe((pedidoEmEdicao) => {
      //let pedidoEmEdicao = this.modalAdicionarService.formGroup.value;
      this.dataSource = this.dataSource.map(pedido => {
        if (pedido.id == pedidoEmEdicao.id) {
          if (pedidoEmEdicao.total && pedidoEmEdicao.preco && pedidoEmEdicao.quantidade) {
            pedidoEmEdicao.total = pedidoEmEdicao.preco * pedidoEmEdicao.quantidade;
          }
          this.updateEvent.emit(pedidoEmEdicao);
          return pedidoEmEdicao;
        }
        return pedido;
      });
      this.table.renderRows();
    });
  }

  remove(element: any): void {
    this.removeEvent.emit(element);
    var index = this.dataSource.indexOf(element);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  encerrarConta(): void {
    this.encerrarContaEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const customPedidoListChanges = changes['customPedidoList'];
    if (!!customPedidoListChanges) {
      this.dataSource = customPedidoListChanges.currentValue;
    }
  }

  ngOnDestroy(): void {
    if (this.pedidoViewAtualizadoEvent) {
      this.pedidoViewAtualizadoEvent.unsubscribe();
    }
  }

}
