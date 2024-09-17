import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from 'src/app/shared/model/atendimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  
  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${environment.apiHost}/atendimentos`;

  constructor(private http: HttpClient) { }
  
  public loadAll(): Observable<Atendimento[]> {
    const headers = new HttpHeaders({
      // 'Origin':'*'
      // 'Access-Control-Allow-Origin':'*'
      'Accept':'application/json'
    });
    return this.http.get<Atendimento[]>(`${this.ENDPOINT}`, {headers});
  }
  
  public loadOneByMesaId(mesaId: number): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.ENDPOINT}?mesaId=${mesaId}`);
  }
}
