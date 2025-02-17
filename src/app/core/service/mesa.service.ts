import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mesa } from '../model/mesa';
import { PageResponse } from '../model/page-response';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private readonly ENDPOINT: string;

  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {
    this.ENDPOINT = `${this.environmentService.apiHost}/mesas`;
  }
  
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
