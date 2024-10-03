import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getLocalStorage(): Storage {
    return localStorage;
  }

  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  excluirToken() {
    localStorage.removeItem(KEY);
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }
  
  possuiToken() {
    return !!this.retornarToken();
  }
}


