import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cardapio } from '../model/cardapio';
import { PageResponse } from '../model/page-response';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly ENDPOINT: string;
  
  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {
    this.ENDPOINT = `${this.environmentService.apiHost}/cardapios`;
  }
  
  findAllContent(): Observable<Cardapio[]> {
    return this.findAll().pipe(
      map(page => page.content as Cardapio[])
    );
  }

  findAll(): Observable<PageResponse> {
    const headers = new HttpHeaders({
      'Accept':'application/json'
    });
    return this.httpClient.get<PageResponse>(this.ENDPOINT, {headers});
  }

  /*listar(): Observable<Cardapio[]> {
    return this.httpClient.get<Cardapio[]>(`${this.ENDPOINT}`);
  }*/

  listarPorNome(varlorDigitado: string): Observable<Cardapio[]> {
    const params = new HttpParams().append('nome', varlorDigitado);
    return this.httpClient.get<Cardapio[]>(`${this.ENDPOINT}`, { params });
  }

  cadastrar(cardapio: Cardapio): Observable<Cardapio> {
    return this.httpClient.post<Cardapio>(`${this.ENDPOINT}`, cardapio);
  }
}
