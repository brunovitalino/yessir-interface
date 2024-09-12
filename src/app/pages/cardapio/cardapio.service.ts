import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from './cardapio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  // private readonly API = 'http://localhost:8080/cardapio'
  private readonly API = 'http://localhost:3000/cardapio'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(this.API);
  }

  listarPorNome(varlorDigitado: string): Observable<Cardapio[]> {
    const params = new HttpParams().append('nome', varlorDigitado);
    return this.http.get<Cardapio[]>(this.API, { params });
  }

  cadastrar(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.post<Cardapio>(this.API, cardapio);
  }
}
