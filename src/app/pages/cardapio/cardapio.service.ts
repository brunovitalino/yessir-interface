import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from '../../shared/model/cardapio';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly API_HOST = environment.apiHost3000;
  private readonly ENDPOINT = `${this.API_HOST}/cardapios`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(`${this.ENDPOINT}`);
  }

  listarPorNome(varlorDigitado: string): Observable<Cardapio[]> {
    const params = new HttpParams().append('nome', varlorDigitado);
    return this.http.get<Cardapio[]>(`${this.ENDPOINT}`, { params });
  }

  cadastrar(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.post<Cardapio>(`${this.ENDPOINT}`, cardapio);
  }
}
