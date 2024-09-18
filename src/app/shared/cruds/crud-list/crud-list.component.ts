import { Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalAdicionarComponent } from '../../modal-adicionar/modal-adicionar.component';
import { ModalAdicionarService } from '../../modal/adicionar/modal-adicionar.service';
import { Pedido } from '../../model/pedido';

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
export class CrudListComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<Pedido>;
  @Input() displayedColumnsInput: string[];
  @Input() dataSourceInput: any[] = [];
  @Input() showEditRemoveIcons = true;

  private confirmEvent: EventEmitter<boolean>;
  public displayedColumns: string[];
  public dataSource: any[] = [];
  
  constructor(
    public dialog: MatDialog,
    public modalAdicionarService: ModalAdicionarService
  ) { }
  
  ngOnInit(): void {
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = this.getDataSource();
  }

  getDisplayedColumns() {
    return !this.isShowEditRemoveIcons() ? [...this.displayedColumnsInput] : [...this.displayedColumnsInput, 'editRemoveIcons'];
  }

  isUseSharpCharacter(columnTitle: string) {
    return columnTitle == 'id'
  }

  getDataSource() {
    return [...this.dataSourceInput];
  }

  isShowEditRemoveIcons() {
    return this.showEditRemoveIcons;
  }

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
