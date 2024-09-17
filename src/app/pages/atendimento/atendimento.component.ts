import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from 'src/app/core/mesa';
import { MesaService } from 'src/app/core/service/mesa.service';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { PedidoService } from '../pedido/pedido.service';
import { AtendimentoService } from './atendimento.service';
import { Pedido } from 'src/app/shared/model/pedido';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

  public atendimentos: Atendimento[] = [];
  public mesas: Mesa[] = [];
  public pedidos: Pedido[] = [];

  constructor(
    private atendimentoService: AtendimentoService,
    private mesaService: MesaService,
    private router: Router,
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.loadAtendimentosAndMesas();
    this.loadPedido();
  }

  loadAtendimentosAndMesas(): void {
    this.atendimentoService.loadAll().subscribe(atendimentos => {
      this.atendimentos = atendimentos;
      this.loadMesas(atendimentos);
    });
  }

  loadMesas(atendimentos: Atendimento[]): void {
    if (!atendimentos.length) return;
    this.mesaService.load().subscribe(mesas => {
      let mesasIds = atendimentos.map(a => a.mesaId);
      this.mesas = mesas.filter(m => mesasIds.some(mesaId => mesaId == m.id));
    });
  }

  visualizarPedidoDaMesa(mesa: Mesa) {
    this.router.navigate( [`atendimento/${mesa.id}`] );
  }

  loadPedido() {
    let mesaId = this.route.snapshot.params['mesaId'];
    if (!mesaId) return;
    console.log('MESA ID', mesaId);
    this.atendimentoService.loadOneByMesaId(mesaId).subscribe(atendimentos => {
      console.log('ATENDIMENTO', atendimentos);
      let atendimento = atendimentos.find(x=>x!==undefined);
      if (!atendimento) return;
      this.pedidoService.loadByAtendimentoId(atendimento.id).subscribe(pedidos => {
        console.log('PEDIDOS', pedidos);
        this.pedidos = pedidos
      });
    });


  }

}
