import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, of } from 'rxjs';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  
  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${environment.apiHost}/atendimentos`;

  constructor(private http: HttpClient) { }
  
  public loadAll(): Observable<Atendimento[]> {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.get<Atendimento[]>(`${this.ENDPOINT}`, {headers});
  }
  
  public loadOneByMesaIdOld(mesaId: number): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.ENDPOINT}?mesaId=${mesaId}`);
  }
  
  public loadOneByMesaId(mesaId: number): Observable<Atendimento> {
    return this.http.get<Atendimento[]>(`${this.ENDPOINT}?mesaId=${mesaId}`)
    .pipe(map(atendimentos => atendimentos.find(a => a.mesaId == mesaId)));
    //.pipe(map(atendimentos => atendimentos.splice(0, 1)[0]));
    // No back, levar em consideracao mesaId==xx && status='ATIVO'
  }
}
