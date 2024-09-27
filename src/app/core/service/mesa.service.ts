import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesa } from '../../shared/model/mesa';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private readonly API_HOST = environment.apiHost;
  private readonly ENDPOINT = `${this.API_HOST}/mesas`

  constructor(private httpClient: HttpClient) { }
  
  load(): Observable<Mesa[]> {
    return this.httpClient.get<Mesa[]>(this.ENDPOINT);
  }
}
