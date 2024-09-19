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

  deleteLinha(id: number): void {
    this.pedidoService.delete(id).subscribe(res => {
      this.linhas = this.linhas.filter(e => e[0]['field'] != id);
    }, err => {
      if (err.error && err.error.exception) {
        console.log('ERRO', err.error.exception, err.error.cause);
      } else {
        console.log('ERRO', err);
      }
    });
  }

}
