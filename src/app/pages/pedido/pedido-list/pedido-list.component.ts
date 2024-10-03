import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { PedidoService } from 'src/app/core/service/pedidos.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 10;
  tableColsNames: string[] = [];
  pedidosSubscription: Subject<any> = new Subject();
  linhas: Observable<any[]> = of([]);

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    //this.loadPageable();
    this.loadTableColsNames();
    this.loadTableDataSource();
  }

  loadPageable(): void {
    this.pedidoService.findAll().subscribe(resp => {
      this.pageNumber = resp.number;
      this.pageSize = resp.size;
      //this.pedidos = resp.content as Pedido[];
    });
  }

  loadTableColsNames(): void {
    this.tableColsNames = [ 'id', 'nome', 'preco', 'quantidade', 'total' ];
  }

  loadTableDataSource(): void {
    this.pedidoService.findTheLatestbyAtendimentoId(3)
    .pipe(map(pedidos =>
      pedidos.map(p => (
        {
          id: p.id,
          nome: p.cardapio.nome,
          preco: p.cardapio.preco,
          quantidade: p.quantidade,
          total: p.cardapio.preco * p.quantidade
        }
      ))
    )).subscribe(pedidos => this.pedidosSubscription.next(pedidos));
  }

  updateDataSourceElement(element: any): void {
    console.log('update event', element);
  }

  removeDataSourceElement(element: any): void {
    console.log('remove event', element);
  }

  encerrarConta(): void {
    console.log('conta encerrada');
  }

}
