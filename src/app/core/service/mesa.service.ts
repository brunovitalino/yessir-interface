import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Mesa } from '../model/mesa';
import { PageResponse } from '../model/page-response';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${this.API_HOST}/mesas`

  constructor(private httpClient: HttpClient) { }
  
  findAllContent(): Observable<Mesa[]> {
    return this.findAll().pipe(
      map(page => page.content as Mesa[])
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

  findOnebyId(id: number): Observable<PageResponse> {
    return this.httpClient.get<PageResponse>(`${this.ENDPOINT}/${id}`);
  }

  save(mesa: Mesa): void {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    this.httpClient.post<Mesa>(this.ENDPOINT, mesa, {headers});
  }

  update(mesa: Mesa): void {
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
    this.httpClient.put<Mesa>(this.ENDPOINT, mesa, {headers});
  }
}
