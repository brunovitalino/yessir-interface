import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pedido } from '../model/pedido';
import { PageResponse } from '../model/page-response';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly ENDPOINT: string;

  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {
    this.ENDPOINT = `${this.environmentService.apiHost}/pedidos`;
  }
  
  findAllContent(): Observable<Pedido[]> {
    return this.findAll().pipe(
      map(page => page.content as Pedido[])
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

  findOnebyId(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.ENDPOINT}/${id}`);
  }

  findTheLatestbyAtendimentoId(atendimentoId: number): Observable<Pedido[]> {
    const headers = new HttpHeaders({
      'Accept':'application/json'
    });
    return this.httpClient.get<Pedido[]>(`${this.ENDPOINT}/atendimento/${atendimentoId}`, {headers});
  }

  save(pedido: Pedido): Observable<Pedido> {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    return this.httpClient.post<Pedido>(this.ENDPOINT, pedido, {headers});
  }

  update(pedido: Pedido): Observable<Pedido> {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    return this.httpClient.put<Pedido>(this.ENDPOINT, pedido, {headers});
  }
  
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.ENDPOINT}/${id}`);
  }
  
}
