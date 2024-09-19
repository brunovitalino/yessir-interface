import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 10;
  pedidos: Pedido[] = [];
  colunas: string[] = [];
  linhas: Observable<any[]> = of([]);

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    //this.loadPageable();
    this.colunas = this.getColunas();
    this.linhas = this.getLinhas();
  }

  loadPageable(): void {
    this.pedidoService.findAll().subscribe(resp => {
      this.pageNumber = resp.number;
      this.pageSize = resp.size;
      this.pedidos = resp.content as Pedido[];
    });
  }

  getColunas(): string[] {
    return [ 'id', 'nome', 'preco', 'quantidade', 'total' ];
  }

  getLinhas(): Observable<any[]> {
    return this.pedidoService.loadByAtendimentoId(2).pipe(
      map((pedido: Pedido[]) => pedido.map(p => {
        return {
          id: p.id,
          nome: p.cardapio.nome,
          preco: p.cardapio.preco,
          quantidade: p.quantidade,
          total: p.cardapio.preco * p.quantidade
        }
      }))
    );
  }

  loadLinhas(): void {
    this.pedidoService.findAll().subscribe(resp => {
      this.pageNumber = resp.number;
      this.pageSize = resp.size;
      this.pedidos = resp.content as Pedido[];
    });
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
