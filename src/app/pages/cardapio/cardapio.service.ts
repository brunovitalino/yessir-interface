import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../../shared/model/cardapio';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageResponse } from 'src/app/shared/model/page-response';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${this.API_HOST}/cardapios`;

  constructor(private httpClient: HttpClient) { }
  
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

  listar(): Observable<Cardapio[]> {
    return this.httpClient.get<Cardapio[]>(`${this.ENDPOINT}`);
  }

  listarPorNome(varlorDigitado: string): Observable<Cardapio[]> {
    const params = new HttpParams().append('nome', varlorDigitado);
    return this.httpClient.get<Cardapio[]>(`${this.ENDPOINT}`, { params });
  }

  cadastrar(cardapio: Cardapio): Observable<Cardapio> {
    return this.httpClient.post<Cardapio>(`${this.ENDPOINT}`, cardapio);
  }
}
