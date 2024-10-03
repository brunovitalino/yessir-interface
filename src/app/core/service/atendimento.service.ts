import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/model/page-response';
import { Atendimento } from 'src/app/shared/model/atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${this.API_HOST}/atendimentos`

  constructor(private httpClient: HttpClient) { }
  
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

  save(atendimento: Atendimento): void {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    this.httpClient.post<Atendimento>(this.ENDPOINT, atendimento, {headers});
  }

  update(atendimento: Atendimento): void {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    this.httpClient.put<Atendimento>(this.ENDPOINT, atendimento, {headers});
  }
}
