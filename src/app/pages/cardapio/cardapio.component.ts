import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Atendimento } from 'src/app/core/model/atendimento';
import { AtendimentoService } from 'src/app/core/service/atendimento.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit, OnDestroy {
  
  private mesaId: number;
  private loadMesaIdSubscription: Subscription;
  private atendimento: Atendimento;

  constructor(
    public userService: UserService,
    public atendimentoService: AtendimentoService
  ) { }

  ngOnInit(): void {
    this.loadMesaId();
    this.loadAtendimento();
  }
  
  loadMesaId(): void {
    this.loadMesaIdSubscription = this.userService.retornarUser().subscribe(user => {
      this.mesaId = user?.mesaId;
    });
  }

  iniciarAtendimento(): void {
    this.atendimento = { mesa: { id: this.mesaId } };
    this.atendimentoService.save(this.atendimento).subscribe({
      next: atendimento => this.atendimento = atendimento,
      error: httpErrorResponse => console.error("ERRO ao iniciar atendimento em Cardapio:", httpErrorResponse.error.detail)
    });
  }
  
  loadAtendimento(): void {
    this.atendimentoService.findTheLatestbyMesaId(this.mesaId).subscribe({
      next: atendimento => this.atendimento = atendimento,
      error: httpErrorResponse => console.error("ERRO ao carregar atendimento em Cardapio:", httpErrorResponse.error.detail)
    });
  }
  
  hasAtendimentoIniciado() {
    return !!this.atendimento;
  }
  
  ngOnDestroy(): void {
    if(this.loadMesaIdSubscription) this.loadMesaIdSubscription.unsubscribe();
  }

}
