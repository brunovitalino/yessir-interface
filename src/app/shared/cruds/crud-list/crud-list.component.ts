import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalAdicionarComponent } from '../../modal-adicionar/modal-adicionar.component';
import { ModalAdicionarService } from '../../modal/adicionar/modal-adicionar.service';
import { Pedido } from '../../model/pedido';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudListComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<Pedido>;
  @Input() displayedColumnsInput: string[];
  @Input() dataSourceInput: Observable<any[]>;
  @Input() showEditRemoveIcons = true;

  private confirmEvent: EventEmitter<boolean>;
  public displayedColumns: string[];
  public dataSource: any[] = [];
  
  constructor(
    public dialog: MatDialog,
    public modalAdicionarService: ModalAdicionarService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {
    this.loadDisplayedColumns();
    this.loadDataSource();
  }

  loadDisplayedColumns(): void {
    this.displayedColumns = !this.isShowEditRemoveIcons() ? [...this.displayedColumnsInput] : [...this.displayedColumnsInput, 'editRemoveIcons'];
  }

  isUseSharpCharacter(columnTitle: string): boolean {
    return columnTitle == 'id'
  }

  loadDataSource(): void {
    this.dataSourceInput.subscribe((data) => {
      this.dataSource = data;
      this.changeDetectorRef.detectChanges();
    });
  }

  encerrarConta(): void {
    this.changeDetectorRef.detectChanges();
  }

  isShowEditRemoveIcons(): boolean {
    return this.showEditRemoveIcons;
  }

  remove(element: any): void {
    var index = this.dataSource.indexOf(element);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  openEditDialog(element): void {
    this.modalAdicionarService.formGroup.patchValue(element);
    this.dialog.open(ModalAdicionarComponent, {
      width: '50%',
      disableClose: true
    });
    this.confirmEvent = this.modalAdicionarService.getConfirmarEvent();
    this.confirmEvent.subscribe(() => {
      let element = this.modalAdicionarService.formGroup.value;
      this.dataSource = this.dataSource.map(e => {
        if (e.id == element.id) {
          if (element.total && element.preco && element.quantidade) {
            element.total = element.preco * element.quantidade;
          }
          return element;
        }
        return e;
      });
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.confirmEvent) {
      this.confirmEvent.unsubscribe();
    }
  }

}
