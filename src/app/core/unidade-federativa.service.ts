import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { UnidadeFederativa } from '../shared/model/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  //private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) {
  }

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    //return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
    return of([
      {
        id: 1,
        nome: "São Paulo",
        sigla: "SP"
      },
      {
        id: 2,
        nome: "Ceará",
        sigla: "CE"
      }
    ]);
  }
}
