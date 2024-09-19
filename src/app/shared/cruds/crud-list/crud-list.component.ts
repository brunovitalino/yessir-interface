import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalAdicionarComponent } from '../../modal-adicionar/modal-adicionar.component';
import { ModalAdicionarService } from '../../modal/adicionar/modal-adicionar.service';
import { Pedido } from '../../model/pedido';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudListComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<Pedido>;
  @Input() displayedColumnsInput: string[] = [];
  @Input() dataSourceInput: Observable<any[]> = of([]);
  @Input() dataSourceSubscription: Subject<any> = new Subject();
  @Input() linhasInput: string[] = [];
  @Input() showEditRemoveIcons = true;
  @Input() isContaEncerrada = false;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<any>();
  @Output() encerrarContaEvent = new EventEmitter();

  private confirmEvent: EventEmitter<boolean>;
  displayedColumns: string[];
  dataSource: any[] = [];

  
  constructor(
    public dialog: MatDialog,
    public modalAdicionarService: ModalAdicionarService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }
  
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
    /*this.dataSourceInput.subscribe((data) => {
      this.dataSource = data;
      this.changeDetectorRef.detectChanges();
    });*/

    console.log('executado?');
    this.dataSourceSubscription.subscribe(data => {
      this.dataSource = data;
      this.changeDetectorRef.detectChanges();
      console.log('executado de novo?');
    });
  }

  isShowEditRemoveIcons(): boolean {
    return this.showEditRemoveIcons;
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
          this.updateEvent.emit(element);
          return element;
        }
        return e;
      });
      this.changeDetectorRef.detectChanges();
    });
  }

  refreshTable() {
    this.changeDetectorRef.detectChanges();
  }

  remove(element: any): void {
    this.removeEvent.emit(element);
    var index = this.dataSource.indexOf(element);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  encerrarConta(): void {
    this.isContaEncerrada = true;
    this.encerrarContaEvent.emit();
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.confirmEvent) {
      this.confirmEvent.unsubscribe();
    }
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
    }
  }

}
