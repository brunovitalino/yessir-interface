import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageResponse } from 'src/app/shared/model/page-response';
import { Pedido } from 'src/app/shared/model/pedido';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PedidoOldService {
  
  private readonly API_HOST = environment.apiHost3000;

  constructor(
    private http: HttpClient
  ) { }
  
  public findAll() {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.get<PageResponse>(`${this.API_HOST}/pedidos`, {headers});
  }
  
  public findOneById(id: number) {
    return this.http.get<Pedido>(`${this.API_HOST}/pedidos/${id}`);
  }
  
  public save(motorista: Pedido) {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.post<Pedido>(`${this.API_HOST}/pedidos`, motorista, {headers});
  }
  
  public update(id: number, motorista: Pedido) {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json',
      // // 'Access-Control-Request-Headers':'Content-Type',
      'Content-Type':'application/json'
    });
    return this.http.put<Pedido>(`${this.API_HOST}/pedidos/${id}`, motorista, {headers});
  }
  
  public delete(id: number) {
    return this.http.delete<Pedido>(`${this.API_HOST}/pedidos/${id}`);
  }
}
