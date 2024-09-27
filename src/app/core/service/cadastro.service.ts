import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PessoaUsuaria } from 'src/app/shared/model/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  //private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    //return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
    return of();
  }

  buscarCadastro(): Observable<PessoaUsuaria> {
    //return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
    return of({
      nome: "Bruno"
    } as PessoaUsuaria);
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    //return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria);
    return of();
  }

}
