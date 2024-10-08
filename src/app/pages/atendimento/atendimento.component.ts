import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';

import { AtendimentoService } from 'src/app/core/service/atendimento.service';
import { MesaService } from 'src/app/core/service/mesa.service';
import { PedidoService } from 'src/app/core/service/pedidos.service';
import { Atendimento } from 'src/app/core/model/atendimento';
import { Mesa } from 'src/app/core/model/mesa';
import { Pedido } from 'src/app/core/model/pedido';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent {

  public atendimentos: Atendimento[] = [];
  public mesas: Mesa[] = [];
  public tableColsNames: string[] = [];
  public customPedidoList: any[] = [];
  public mesaId: number;
  public isContaEncerrada: boolean;
  private atendimento: Atendimento;

  constructor(
    private atendimentoService: AtendimentoService,
    private mesaService: MesaService,
    private router: Router,
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {
  }

  ngOnInit(): void {
    this.loadMesas();
    this.loadTableColsNames();
    this.loadDinamicTableDataSource();
  }

  loadMesas(): void {
    this.mesaService.findAllContent().pipe(switchMap(mesas =>
      this.atendimentoService.findAllContent().pipe(map(atendimentos => {
        const mesasIds = atendimentos.map(a => a.mesa.id);
        return mesas.filter(m => mesasIds.some(mesaId => mesaId == m.id));
      }))
    )).subscribe(mesas => {
      this.mesas = mesas;
    })
  }

  visualizarPedidoDaMesa(mesa: Mesa) {
    this.router.navigate([`atendimento/${mesa.id}`]);
  }

  loadTableColsNames(): void {
    this.tableColsNames = ['id', 'nome', 'preco', 'quantidade', 'total'];
  }
  
  loadDinamicTableDataSource(): void {
    //this.route.snapshot.params['mesaId'];
    this.route.params.subscribe(params => this.loadTableDataSource(params['mesaId']));
  }

  loadTableDataSource(mesaId: number): void {
    if (!mesaId) return;
    this.mesaId = mesaId;
    this.atendimentoService.findTheLatestbyMesaId(mesaId).pipe(
      switchMap(atendimento => {
        if (!atendimento) return of();
        this.isContaEncerrada = atendimento?.status?.includes('EM_PAGAMENTO');
        this.atendimento = atendimento;
        return this.pedidoService.findTheLatestbyAtendimentoId(atendimento.id)
      }),
      map(pedidos => pedidos.map(p => (
        {
          id: p.id,
          nome: p.cardapio.nome,
          preco: p.cardapio.preco,
          quantidade: p.quantidade,
          total: p.cardapio.preco * p.quantidade
        }
      )))
    ).subscribe(pedidos => this.customPedidoList = pedidos);
  }

  updatePedidoListElement(pedidoEmEdicao: any): void {
    const pedido = { id: pedidoEmEdicao.id, quantidade: pedidoEmEdicao.quantidade } as Pedido;
    this.pedidoService.update(pedido).pipe(
      map(pedidoEditado => this.customPedidoList.map(p => p.id != pedidoEditado.id ? p : pedidoEditado))
    ).subscribe();
  }

  deletePedidoListElement(pedidoASerRemovido: any): void {
    console.log("chegouxx", pedidoASerRemovido);
    this.pedidoService.delete(pedidoASerRemovido.id).subscribe(resp => console.log("elem removido", resp));
  }

  encerrarConta(): void {
    const atendimento = { id: this.atendimento.id, status: 'EM_PAGAMENTO' } as Atendimento;
    this.atendimentoService.update(atendimento).subscribe(atendimento => this.isContaEncerrada = atendimento?.status?.includes('EM_PAGAMENTO'));
  }

}
