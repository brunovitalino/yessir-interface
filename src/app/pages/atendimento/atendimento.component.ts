import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, Subject, switchMap } from 'rxjs';
import { AtendimentoService } from 'src/app/core/service/atendimento.service';
import { MesaService } from 'src/app/core/service/mesa.service';
import { PedidoService } from 'src/app/core/service/pedidos.service';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { Mesa } from 'src/app/shared/model/mesa';

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

  loadMesas(): void {
    this.mesaService.findAllContent().pipe(switchMap(mesas =>
      this.atendimentoService.findAllContent().pipe(map(atendimentos => {
        let mesasIds = atendimentos.map(a => a.mesa.id);
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
    this.atendimentoService.findTheLatestbyMesaId(mesaId)
    .pipe(switchMap(atendimento =>
      !atendimento ? of() : this.pedidoService.findTheLatestbyAtendimentoId(atendimento.id)
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
