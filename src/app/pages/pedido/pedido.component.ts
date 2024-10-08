import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of, Subscription, switchMap, tap } from 'rxjs';
import { Atendimento } from 'src/app/core/model/atendimento';
import { Pedido } from 'src/app/core/model/pedido';
import { AtendimentoService } from 'src/app/core/service/atendimento.service';
import { PedidoService } from 'src/app/core/service/pedidos.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit, OnDestroy {
  tableColsNames: string[] = [];
  customPedidoList: any[] = [];
  isContaEncerrada = false;
  private atendimento: Atendimento;

  loadPedidoListSubscription: Subscription;

  constructor(
    private userService: UserService,
    private atendimentoService: AtendimentoService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.loadTableColsNames();
    this.loadTableDataSource();
  }

  loadTableColsNames(): void {
    this.tableColsNames = [ 'id', 'nome', 'preco', 'quantidade', 'total' ];
  }

  loadTableDataSource(): void {
    console.log("carregando tabela");
    
    this.loadPedidoListSubscription = this.userService.retornarUser().pipe(
      switchMap(user => !user ? of({} as Atendimento) : this.atendimentoService.findTheLatestbyMesaId(user.mesaId)),
      switchMap(atendimento => {
        if (!atendimento) return of({} as Pedido);
        this.isContaEncerrada = atendimento?.status?.includes('EM_PAGAMENTO');
        this.atendimento = atendimento;
        return this.pedidoService.findTheLatestbyAtendimentoId(atendimento.id).pipe(
          map(pedidos => pedidos.map(p =>
            ({
              id: p.id,
              nome: p.cardapio.nome,
              preco: p.cardapio.preco,
              quantidade: p.quantidade,
              total: (p.cardapio.preco * p.quantidade)
            })
          )),
          tap(pedidos => this.customPedidoList = pedidos)
        );
      })
    ).subscribe();
  }

  encerrarConta(): void {
    const atendimento = { id: this.atendimento.id, status: 'EM_PAGAMENTO' } as Atendimento;
    this.atendimentoService.update(atendimento).subscribe(atendimento => this.isContaEncerrada = atendimento?.status?.includes('EM_PAGAMENTO'));
  }
  
  ngOnDestroy(): void {
    if(this.loadPedidoListSubscription) this.loadPedidoListSubscription.unsubscribe();
  }

}
