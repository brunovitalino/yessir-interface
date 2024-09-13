import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../../shared/model/cardapio';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  // private readonly API = 'http://localhost:8080/cardapio'
  private readonly API_HOST = environment.apiHost;

  constructor(private http: HttpClient) { }

  listar(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(`${this.API_HOST}/cardapio`);
  }

  listarPorNome(varlorDigitado: string): Observable<Cardapio[]> {
    const params = new HttpParams().append('nome', varlorDigitado);
    return this.http.get<Cardapio[]>(`${this.API_HOST}/cardapio`, { params });
  }

  cadastrar(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.post<Cardapio>(`${this.API_HOST}/cardapio`, cardapio);
  }
}
