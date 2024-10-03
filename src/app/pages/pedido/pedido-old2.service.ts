import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/model/page-response';
import { Pedido } from 'src/app/shared/model/pedido';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PedidoOld2Service {
  
  private readonly API_HOST = environment.apiHost3000;
  private readonly ENDPOINT = `${environment.apiHost3000}/pedidos`;

  constructor(
    private http: HttpClient
  ) { }
  
  public loadAll(): Observable<Pedido[]> {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.get<Pedido[]>(`${this.ENDPOINT}`, {headers});
  }
  
  public loadByAtendimentoId(atendimentoId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.ENDPOINT}?atendimentoId=${atendimentoId}`);
  }
  
  public findAll() {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.get<PageResponse>(`${this.ENDPOINT}`, {headers});
  }
  
  public findOneById(id: number) {
    return this.http.get<Pedido>(`${this.ENDPOINT}/${id}`);
  }
  
  public save(motorista: Pedido) {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.post<Pedido>(`${this.ENDPOINT}`, motorista, {headers});
  }
  
  public update(id: number, motorista: Pedido) {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json',
      // // 'Access-Control-Request-Headers':'Content-Type',
      'Content-Type':'application/json'
    });
    return this.http.put<Pedido>(`${this.ENDPOINT}/${id}`, motorista, {headers});
  }
  
  public delete(id: number) {
    return this.http.delete<Pedido>(`${this.ENDPOINT}/${id}`);
  }
}
