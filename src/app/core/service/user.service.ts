import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { TokenService } from './token.service';
import { PessoaUsuaria } from 'src/app/shared/model/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const user = jwt_decode(token) as PessoaUsuaria;
    //console.log('user decodificado', user.roles.includes("ADMIN"));
    //console.log('token decodificado', jwt_decode(token));
    //const user = { nome: "Bruno" } as PessoaUsuaria;
    this.userSubject.next(user);
  }

  retornarUser(): Observable<PessoaUsuaria> {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

  isAdmin(): boolean {
    return this.hasThatRole("ADMIN");
  }

  isMesa(): boolean {
    return this.hasThatRole("MESA");
  }

  isGarcom(): boolean {
    return this.hasThatRole("GARCOM");
  }

  hasThatRole(roleName: string) {
    return this.estaLogado() && this.userSubject.getValue().roles.toUpperCase().includes(roleName);
  }
}



