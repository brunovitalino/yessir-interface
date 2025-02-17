import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Atendimento } from '../model/atendimento';
import { PageResponse } from '../model/page-response';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private readonly ENDPOINT: string;

  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {
    this.ENDPOINT = `${this.environmentService.apiHost}/atendimentos`;
  }
  
  findAllContent(): Observable<Atendimento[]> {
    return this.findAll().pipe(
      map(page => page.content as Atendimento[])
    );
  }

  findAll(): Observable<PageResponse> {
    const headers = new HttpHeaders({
      //'Origin':'*',
      //'Access-Control-Allow-Origin':'*',
      'Accept':'application/json'
    });
    return this.httpClient.get<PageResponse>(this.ENDPOINT, {headers});
  }

  findOnebyId(id: number): Observable<Atendimento> {
    return this.httpClient.get<Atendimento>(`${this.ENDPOINT}/${id}`);
  }

  findTheLatestbyMesaId(mesaId: number): Observable<Atendimento> {
    return this.httpClient.get<Atendimento>(`${this.ENDPOINT}/mesa/${mesaId}`);
    //return this.httpClient.get<Atendimento[]>(`${this.ENDPOINT}/mesa/${mesaId}`)
    //.pipe(map(atendimentos => atendimentos.sort((a, p) => p.id - a.id)[0]));
  }

  save(atendimento: Atendimento): Observable<Atendimento> {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    return this.httpClient.post<Atendimento>(this.ENDPOINT, atendimento, {headers});
  }

  update(atendimento: Atendimento): Observable<Atendimento> {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    return this.httpClient.put<Atendimento>(this.ENDPOINT, atendimento, {headers});
  }
}
