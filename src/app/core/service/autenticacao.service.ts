import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { EnvironmentService } from './environment.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private ENDPOINT: string = '';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private environmentService: EnvironmentService
  ) {
    this.ENDPOINT = `${this.environmentService.apiHost}/auth/login`;
    console.log('CALL: apiHost()/auth/login: ', this.ENDPOINT);
  }

  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.post<AuthResponse>(
      this.ENDPOINT,
      { email, senha },
      { observe: 'response', headers }
    ).pipe(
      tap((response) => {
        const authToken = response.body?.access_token || '';
        this.userService.salvarToken(authToken);
      })
    );
  }

  isGarcomAutenticado(): boolean {
    return this.userService.isGarcom();
  }

}
