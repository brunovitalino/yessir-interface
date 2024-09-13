import { Component, OnInit } from '@angular/core';
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
  colunas: any = [];
  linhas: any = [];

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.loadPageable();
    this.loadColunas();
    this.loadLinhas();
  }

  loadPageable(): void {
    this.pedidoService.findAll().subscribe(resp => {
      this.pageNumber = resp.number;
      this.pageSize = resp.size;
      this.pedidos = resp.content as Pedido[];
    });
  }

  loadColunas(): void {
    this.colunas = [
      { header: 'CPF' },
      { header: 'Nome' }
    ];
  }

  loadLinhas(): void {
    this.pedidoService.findAll().subscribe(resp => {
      this.pageNumber = resp.number;
      this.pageSize = resp.size;
      this.pedidos = resp.content as Pedido[];
      this.setLinhas(this.pedidos);
    });
  }

  setLinhas(pedidos: Pedido[]): void {
    /** pedidos.forEach(e => {
      this.linhas.push([
        { field: e.id },
        { field: e.cpf },
        { field: e.nome }
      ]);        
    }); */
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
