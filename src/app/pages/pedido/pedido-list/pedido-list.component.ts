import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { AtendimentoService } from 'src/app/core/service/atendimento.service';
import { PedidoService } from 'src/app/core/service/pedidos.service';
import { UserService } from 'src/app/core/service/user.service';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { Pedido } from 'src/app/shared/model/pedido';

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

  constructor(
    private userService: UserService,
    private atendimentoService: AtendimentoService,
    private pedidoService: PedidoService
  ) { }

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
    console.log("carregando tabela");
    
    this.userService.retornarUser().pipe(
      switchMap(user => !user ? of({} as Atendimento) : this.atendimentoService.findTheLatestbyMesaId(user.mesaId)),
      map(atendimento => {
        if (!atendimento) return of({} as Pedido);
        return this.pedidoService.findTheLatestbyAtendimentoId(atendimento.id).pipe(
          map(pedidos => pedidos.map(p =>
            ({
              id: p.id,
              nome: p.cardapio.nome,
              preco: p.cardapio.preco,
              quantidade: p.quantidade,
              total: p.cardapio.preco * p.quantidade
            })
          )),
          tap(pedidos => console.log("pedidos", pedidos))
        );
      })
    ).subscribe(pedidos => this.pedidosSubscription.next(pedidos));
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
