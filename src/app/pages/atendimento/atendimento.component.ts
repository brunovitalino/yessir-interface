import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mesa } from 'src/app/shared/model/mesa';
import { MesaService } from 'src/app/core/service/mesa.service';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { PedidoService } from '../pedido/pedido.service';
import { AtendimentoService } from './atendimento.service';
import { map, Observable, of, skipWhile, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent {

  public atendimentos: Atendimento[] = [];
  public mesas: Mesa[] = [];
  public tableColsNames: string[] = [];
  public pedidosSubscription: Subject<any> = new Subject();
  public mesaId: number;

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

  loadAtendimentosAndMesas(): void {
    this.atendimentoService.loadAll().subscribe(atendimentos => {
      this.atendimentos = atendimentos;
      this.loadMesas();
    });
  }

  loadMesasOld(atendimentos: Atendimento[]): void {
    if (!atendimentos.length) return;
    this.mesaService.load().subscribe(mesas => {
      let mesasIds = atendimentos.map(a => a.mesaId);
      this.mesas = mesas.filter(m => mesasIds.some(mesaId => mesaId == m.id));
    });
  }

  loadMesas(): void {
    this.mesaService.load().pipe(switchMap(mesas =>
      this.atendimentoService.loadAll().pipe(map(atendimentos => {
        let mesasIds = atendimentos.map(a => a.mesaId);
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
    this.atendimentoService.loadOneByMesaId(mesaId).pipe(switchMap(atendimento =>
      !atendimento ? of([]) : this.pedidoService.loadByAtendimentoId(atendimento.id)
    )).pipe(map(pedidos =>
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
